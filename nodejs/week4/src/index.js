import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);

    //(if a serie has been watched)
    if (serie.isWatched) {
      //update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // check for "lastSerie" property, set if we don't.
      if (!this.lastSerie) {
        // set "lastSerie" prop to "serie" object
        this.lastSerie = serie;
      } else {
        let _lastSerieDate = new Date(this.lastSerie.finishedDate);
        let _finishedDate = new Date(serie.finishedDate);
        // check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater
        if (_lastSerieDate < _finishedDate) {
          // set "lastSerie" prop to "serie" object.
          this.lastSerie = serie;
        }
      }
    } 
    // if a serie hasn't been watched:
    else {
      //update the count of watched series: "numberOfUnWatched"
      this.numberOfUnWatched += 1;
      // check if serie has "isCurrent" 
      if (serie.isCurrent) {
        // check if we have a "currentSerie" property
        if (!this.currentSerie) {
          // if we don't set the .currentSerie property
          this.currentSerie = serie;
        }
      } 
      // check if we have a "nextSerie" property
      else if (!this.nextSerie) {
        //if we don't  set the .nextSerie property
        this.nextSerie = serie;
      }
    }
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //loop through all of the series in the "series" argument
    series.forEach((serie) => {
      //use the .add function to handle adding series, so we keep counts updated
      this.add(serie);
    });
  }

  this.finishSerie = function () {

    // find currently watching serie in "this.series" array
    this.series.forEach((serie, index) => {
      // update "lastSerie" with the finished one
      if (serie === this.currentSerie) {
        serie.isWatched = true;
        serie.isCurrent = false;
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, "0");
        let mm = String(today.getMonth() + 1).padStart(2, "0");
        let yyyy = today.getFullYear();
        today = dd + "." + mm + "." + yyyy;
        serie.finishedDate = today;
        this.lastSerie = serie;
        // update "numberOfWatched"
        this.numberOfWatched += 1;
        // update "numberOfUnWatched"
        this.numberOfUnWatched -= 1;
      }
      // set "currentSerie" with the next one
      if (serie === this.nextSerie) {
        this.currentSerie = serie;
        serie.isCurrent = true;
      }
      // set new nextSerie value with the next one which has not been watched
      if (this.nextSerie === this.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          this.nextSerie = serie;
        }
      }
    });
  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}
