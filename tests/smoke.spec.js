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
  '/gry/trypolis',
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

test('games page shows all three game cards', async ({ page }) => {
  await page.goto('/gry')
  await expect(page.getByText('PODRÓŻ SŁUŻBOWA')).toBeVisible()
  await expect(page.getByText('WCZASY POD GRUSZĄ')).toBeVisible()
  await expect(page.getByText('PRINCE OF TRYPOLIS')).toBeVisible()
  await expect(page.getByText('0 kopii (nie wydana)')).toBeVisible()
})

test('trypolis: full playthrough to ending', async ({ page }) => {
  await page.goto('/gry/trypolis')

  await expect(page.getByText('Cel misji — nieznany', { exact: false })).toBeVisible()

  await page.getByRole('button', { name: 'Wejdź przez bramę' }).click()
  await expect(page.getByText('Komnata jest pusta', { exact: false })).toBeVisible()

  await page.getByRole('button', { name: 'Otwórz skrzynię' }).click()
  await expect(page.getByText('Gra nigdy nie wyszła', { exact: false })).toBeVisible()
  await expect(page.getByText('Z.K.', { exact: false })).toBeVisible()
})

test('trypolis: restart returns to intro', async ({ page }) => {
  await page.goto('/gry/trypolis')

  await page.getByRole('button', { name: 'Wejdź przez bramę' }).click()
  await page.getByRole('button', { name: 'Zbadaj mozaikę' }).click()
  await page.getByRole('button', { name: /zagraj ponownie/i }).click()

  await expect(page.getByText('Cel misji — nieznany', { exact: false })).toBeVisible()
})

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
