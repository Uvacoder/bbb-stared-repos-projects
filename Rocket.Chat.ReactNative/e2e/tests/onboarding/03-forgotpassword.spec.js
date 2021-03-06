const data = require('../../data');
const { navigateToLogin } = require('../../helpers/app');

describe('Forgot password screen', () => {
	before(async() => {
		await device.launchApp({ permissions: { notifications: 'YES' }, delete: true });
		await navigateToLogin();
		await element(by.id('login-view-forgot-password')).tap();
		await waitFor(element(by.id('forgot-password-view'))).toExist().withTimeout(2000);
	});

	describe('Render', () => {
		it('should have forgot password screen', async() => {
			await expect(element(by.id('forgot-password-view'))).toExist();
		});

		it('should have email input', async() => {
			await expect(element(by.id('forgot-password-view-email'))).toBeVisible();
		});

		it('should have submit button', async() => {
			await expect(element(by.id('forgot-password-view-submit'))).toBeVisible();
		});
	});

	describe('Usage', () => {
		it('should reset password and navigate to login', async() => {
			await element(by.id('forgot-password-view-email')).replaceText(data.users.existing.email);
			await element(by.id('forgot-password-view-submit')).tap();
			await waitFor(element(by.text('OK'))).toExist().withTimeout(10000);
			await element(by.text('OK')).tap();
			await waitFor(element(by.id('login-view'))).toBeVisible().withTimeout(60000);
		});
	});
});
