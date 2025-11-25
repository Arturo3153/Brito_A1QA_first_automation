describe('Task2 demoqa',() => {
    it('Selects Progress Bar option and checks the reset when refreshing the page', async() => {
        browser.url('https://demoqa.com');      
        
        //Select Widgets card
        const widgetbutton = await $('h5=Widgets')
        await widgetbutton.scrollIntoView()        
        await widgetbutton.click()

        //Select Progress bar function
        const Progressbar = await $('span=Progress Bar')     
        await Progressbar.scrollIntoView()
        await Progressbar.click()
          
        //Click Start button
        const startStopButton = await $('button[id="startStopButton"]')
        await startStopButton.scrollIntoView()
        await startStopButton.click() //

        //Wait unitl the Reset button appears
        const resetButton = await $('button[id="resetButton"]')
        await widgetbutton.scrollIntoView()
        await resetButton.waitUntil(async function() {
            return await this.getText()==='Reset'       
        },{
            timeout: 20000
        })   
        
        //Refresh the page and check if the reset button is not displayed, Progress bar got rested
        await browser.refresh()         

        const checkReset = await resetButton.isDisplayed();
        console.log("Button is displayed "+checkReset); // outputs: false
        expect(checkReset).toBe(false); 
    })

})