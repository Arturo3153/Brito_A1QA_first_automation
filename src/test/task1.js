describe('Task1 herokuapp',() => {
  it('Checks nested frames and verifies the link after going back in the browser ', async() => {
    await browser.url("https://the-internet.herokuapp.com/");
    
    await $('a[href="/nested_frames"]').click();
   //////////////////////////////////////////////

   //Define frames neccesary to navigate
    const topFrame= await browser.$('frame[name="frame-top"]');
    const middleFrame = await browser.$('frame[name="frame-middle"]');
    const leftFrame = await browser.$('frame[name="frame-left"]');
           
    //Enter in middleFrame
    await browser.switchFrame(topFrame);
    await browser.switchFrame(middleFrame);

   //Compare text of middle name with expected outcome "MIDDLE"
    let middleText = await browser.$('body').getText();
    expect(middleText).toBe('MIDDLE');
    console.log("Middle frame "+middleText);

   //Change to leftFrame
    await browser.switchFrame(null);
    await browser.switchFrame(topFrame);
    await browser.switchFrame(leftFrame);
        
   //Compare text of left frame with expected outcome "LEFT"
    let leftText = await browser.$('body').getText();
    expect(leftText).toBe('LEFT');
    console.log("Left frame "+leftText);
   
    // Go back using the browser and check if nested frame link is displayed 
    await browser.switchFrame(null);
    await browser.back();

    const elem2 = await $('a[href="/nested_frames"]').isDisplayed();    
    console.log("Link is displayed 2 "+ elem2 ); 
    expect(elem2).toBe(true)
 
  })
})