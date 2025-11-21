describe('Task2 demoqa',() => {
    it('Selects Widgets option and the Progress Bar option', async() => {
        browser.url('https://demoqa.com');      
        const widgetbutton = await $('div.card:nth-child(4)')// await browser.findElement('css selector','Widgets')
        await widgetbutton.click()

        //it is neccesary to scroll down the page, the method click has troubles if an ad is blocking the button
        browser.scroll(0,400)
        await browser.pause(3000)
        
        const widgetmenu = await $('div.element-group:nth-child(4)') //'.show > ul:nth-child(1) > li:nth-child(5)'
        const progressbar = await widgetmenu.$$('li')[4]
        await progressbar.click()
        
    })

    it('Clicks starStopButton, checks that Reset button appears', async() => {
        browser.scroll(0,400)
        await $('button[id="startStopButton"]').click() //

        await browser.pause(10000)

        const resetButton = await $('button[id="resetButton"]')
        await resetButton.waitUntil(async function() {
            return await this.getText()==='Reset'

        })       

    })

    it('Verifies that reset Button is not in page after refreshing the page',async() => {
    
    await browser.refresh()         

    const elem = await $('button[id="resetButton"]').isDisplayed();
    console.log("Button is displayed "+elem); // outputs: false
    expect(elem).toBe(false); 

    })
})