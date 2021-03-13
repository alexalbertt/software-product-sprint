// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

google.charts.load("current", {'packages':["calendar"]});
google.charts.setOnLoadCallback(drawChart);

/** Creates a chart and adds it to the page. */
function drawChart() {
  var dataTable = new google.visualization.DataTable();
       dataTable.addColumn({ type: 'date', id: 'Date' });
       dataTable.addColumn({ type: 'number', id: 'Hours' });
       dataTable.addRows([
          [ new Date(2021, 1, 2), 6.5 ],
          [ new Date(2021, 1, 3), 6.5 ],
          [ new Date(2021, 1, 4), 7.5 ],
          [ new Date(2021, 1, 5), 8 ],
          [ new Date(2021, 1, 6), 8.5 ],
          [ new Date(2021, 1, 7), 7.5 ],
          [ new Date(2021, 1, 8), 7 ],
          [ new Date(2021, 1, 9), 7.5 ],
          [ new Date(2021, 1, 10), 7 ],
          [ new Date(2021, 1, 11), 7.5 ],
          [ new Date(2021, 1, 12), 7 ],
          [ new Date(2021, 1, 13), 8 ],
          [ new Date(2021, 1, 14), 8 ],
          [ new Date(2021, 1, 15), 8 ],
          [ new Date(2021, 1, 16), 8 ],
          [ new Date(2021, 1, 17), 8 ],
          [ new Date(2021, 1, 18), 8 ],
          [ new Date(2021, 1, 19), 8 ],
          [ new Date(2021, 1, 20), 8 ],
          [ new Date(2021, 1, 21), 8 ],
          [ new Date(2021, 1, 22), 8 ],
          [ new Date(2021, 1, 23), 8 ],
          [ new Date(2021, 1, 24), 8 ],
          [ new Date(2021, 1, 25), 8 ],
          [ new Date(2021, 1, 26), 8 ],
          [ new Date(2021, 1, 27), 8 ],
          [ new Date(2021, 1, 28), 8 ],
          [ new Date(2021, 1, 29), 8 ],
          [ new Date(2021, 1, 30), 8 ],
          [ new Date(2021, 1, 31), 8 ],
        ]);

       var chart = new google.visualization.Calendar(document.getElementById('calendar_basic'));

       var options = {
         title: "Hours of Sleep Per Night",
         height: 350,
       };

       chart.draw(dataTable, options);
}

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings =
      ['Hello world!', '¡Hola Mundo!', '你好，世界！', 'Bonjour le monde!'];

  // Pick a random greeting.
  const greeting = "Alright alright alright";
  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

async function showQuote() {
  const responseFromServer = await fetch('/quote');

  const quotes = await responseFromServer.json();
  console.log(quotes);
  const index = Math.floor(Math.random()*3);
  const quote = quotes[index];
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}