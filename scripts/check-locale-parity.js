#!/usr/bin/env node
// Fails with exit 1 if pl.json and en.json have different key sets or array lengths.
import { readFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

const pl = JSON.parse(readFileSync(resolve(root, 'src/locales/pl.json'), 'utf8'))
const en = JSON.parse(readFileSync(resolve(root, 'src/locales/en.json'), 'utf8'))

function collectIssues(a, b, path = '') {
  const issues = []
  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)
  const onlyA = aKeys.filter(k => !Object.hasOwn(b, k))
  const onlyB = bKeys.filter(k => !Object.hasOwn(a, k))
  for (const k of onlyA) issues.push(`  only in pl: ${path}${k}`)
  for (const k of onlyB) issues.push(`  only in en: ${path}${k}`)
  for (const k of aKeys) {
    if (!Object.hasOwn(b, k)) continue
    const av = a[k], bv = b[k]
    if (Array.isArray(av) && Array.isArray(bv)) {
      if (av.length !== bv.length)
        issues.push(`  array length mismatch at ${path}${k}: pl=${av.length} en=${bv.length}`)
      const len = Math.min(av.length, bv.length)
      for (let i = 0; i < len; i++) {
        if (av[i] !== null && typeof av[i] === 'object' && bv[i] !== null && typeof bv[i] === 'object')
          issues.push(...collectIssues(av[i], bv[i], `${path}${k}[${i}].`))
      }
    } else if (av !== null && typeof av === 'object' && bv !== null && typeof bv === 'object') {
      issues.push(...collectIssues(av, bv, `${path}${k}.`))
    }
  }
  return issues
}

const issues = collectIssues(pl, en)

if (issues.length === 0) {
  console.log('locale parity OK — pl.json and en.json are in sync')
  process.exit(0)
} else {
  console.error(`locale parity FAILED — ${issues.length} issue(s):\n${issues.join('\n')}`)
  process.exit(1)
}
