export const quadrantClicked = (e:any) => {
    console.log('quadrant was clicked: ', e.target.getAttribute("quad-data"), e.target.getAttribute("idx-data"));
}