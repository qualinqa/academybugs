export class BugPopupsPage {
    constructor(page) {
        this.bugPopupCongrats = page.locator('.academy-popup-bug-title')
        this.bugPopupQuestion = page.locator('#bug-popup')
        this.bugLayerInfo = page.locator('.academy-bug-info-overlay')
        this.bugLayer = page.locator('.academy-bug-overlay').first()
        this.crashLayer = page.locator('.academy-crash-overlay-bug').first()
    }
}