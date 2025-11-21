it('Task 1 - herokuapp ', async() => {
    await browser.url("https://the-internet.herokuapp.com/");
    const elem = await $('a[href="/nested_frames"]').isDisplayed(); 
    expect(elem).toBe(true);
    console.log("Link is displayed 1 "+elem); // outputs: true. It was consulted the link for reference for the final step

    await $('a[href="/nested_frames"]').click();

})

it('detects if frames has their respective name (middle, left)', async () => {
  //////////////////////////////////////////////77

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
 
});



it('Detects if the nested frame link is displayed', async() => {
  await browser.back();
  const elem2 = await $('a[href="/nested_frames"]').isDisplayed();
        
  console.log("Link is displayed 2 "+elem2); // outputs: false. The code is a copy of the first test but the outcome is different
                                          //to compare the output seach in cmd "Link is display"
  expect(elem2).toBe(true)
  
  

})
