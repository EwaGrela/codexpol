import { test, expect } from '@playwright/test'

const ROUTES = [
  '/',
  '/o-nas',
  '/zespol',
  '/kadry',
  '/tech',
  '/zarzad',
  '/produkty',
  '/sigma-fk',
  '/hermes',
  '/teczka95',
  '/kom-bit',
  '/vatowiec',
  '/zapora',
  '/legacy',
  '/gry',
  '/gry/podroz',
  '/gry/wczasy',
  '/wkrotce',
]

for (const route of ROUTES) {
  test(`renders ${route}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (err) => errors.push(err.message))

    await page.goto(route)
    await expect(page.locator('nav.nav')).toBeVisible()
    await expect(page.locator('body')).not.toBeEmpty()

    expect(errors, `uncaught errors on ${route}: ${errors.join(', ')}`).toHaveLength(0)
  })
}

test('language toggle switches visible text', async ({ page }) => {
  await page.goto('/')

  const plText = 'Budujemy software, który działa.'
  const enText = 'We build software that works.'

  await expect(page.getByText(plText, { exact: false })).toBeVisible()

  await page.getByRole('button', { name: 'EN' }).click()
  await expect(page.getByText(enText, { exact: false })).toBeVisible()
  await expect(page.getByText(plText, { exact: false })).not.toBeVisible()

  await page.getByRole('button', { name: 'PL' }).click()
  await expect(page.getByText(plText, { exact: false })).toBeVisible()
})
