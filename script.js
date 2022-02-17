let raw_data = document.getElementsByClassName("mat-cell cdk-cell banner flex-basis-5 cdk-column-mapBanner mat-column-mapBanner ng-star-inserted"); //getting all the mp link from the preview of the map;
let cleaned_data = [];
for (var i = 0; i < raw_data.length(); i++){
  cleaned_data.push(raw_data[i].style.backgroundImage.replace(/^\D+/g, '')); //extract only the url of the map
  window.open(cleaned_data[i]);
}
