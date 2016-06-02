// C3 init

var my_data = [
  ["EUR vs USD", 1.0812, 0.9564, 0.894, 0.8778, 1.0582, 1.2101, 1.2923, 1.2179, 1.3373, 1.5693, 1.3255, 1.334, 1.4283, 1.3068, 1.3023, 1.3723, 1.0847, 1.1364]
];

var my_chart_parameters = {
  "data": {
    "columns": my_data,
    "selection": {
      "enabled": true
    }
  },
  "point": {
    "r": 5,
    "focus": {
      "expand": {
        "r": 6,
        "enabled": true
      }
    }
  },
  "axis": {
    "x": {
      "type": 'category',
      "categories": ['1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']
    },
    "y": {
      "label": 'EUR vs USD'
    }
  },
  "grid": {
    "x": {
      "show": true
    },
    "y": {
      "show": true
    }
  },
  "tooltip": {
    "show": true,
    "grouped": false
  }
};

var my_chart_object ;

// slides

var slide_0 = function() {
	my_chart_object = c3.generate(my_chart_parameters);

  document.getElementById("c3_message").innerHTML = "Data from: https://www.quandl.com/data/ECB/EURUSD-EUR-vs-USD-Foreign-Exchange-Reference-Rate"
};

var slide_1 = function() {
  my_chart_object.axis.max({
    x: 4
  });
  document.getElementById("c3_message").innerHTML = "Let's look at the period between 1999-2003"
};

var slide_2 = function() {
  my_chart_object.axis.max({
    x: 4
  });
  my_chart_object.regions.add({
    axis: 'x',
    start: 1,
    end: 3,
    class: 'regionMin'
  });
  my_chart_object.load({
    columns: [
      ["1 vs 1", 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
  });
  document.getElementById("c3_message").innerHTML = "2000-2002 was the only timeperiod when 1 USD was worth more than 1 EUR in our given timespan";
};

var slide_3 = function() {
  my_chart_object.load({
    columns: [
      ["min", 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778, 0.8778]
    ]
  });
  my_chart_object.regions.remove({
    classes: ['regionMin']
  });
  my_chart_object.axis.max({
    x: 5
  });
  setTimeout(function() {
    my_chart_object.axis.max({
      x: 6
    });
    setTimeout(function() {
      my_chart_object.axis.max({
        x: 7
      });
      setTimeout(function() {
        my_chart_object.axis.max({
          x: 8
        });
        setTimeout(function() {
          my_chart_object.axis.max({
            x: 9
          });
          my_chart_object.load({
            columns: [
              ["max", 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693, 1.5693]
            ]
          });
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);

  document.getElementById("c3_message").innerHTML = "Then the currency steadily increased until 2008 where it hit its max value: 1.5693";
};

var slide_4 = function() {
  my_chart_object.axis.max({
    x: 10
  });
  setTimeout(function() {
    my_chart_object.axis.max({
      x: 11
    });
    setTimeout(function() {
      my_chart_object.axis.max({
        x: 12
      });
      setTimeout(function() {
        my_chart_object.axis.max({
          x: 13
        });
        setTimeout(function() {
          my_chart_object.axis.max({
            x: 14
          });
          setTimeout(function() {
            my_chart_object.axis.max({
              x: 15
            });
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
  document.getElementById("c3_message").innerHTML = "After 2008 it took a dip back to around 1.3, where it remained quite steadily until 2014";
};

var slide_5 = function() {
  my_chart_object.axis.max({
    x: 16
  });
  setTimeout(function() {
    my_chart_object.axis.max({
      x: 17
    });
  }, 1000);

  document.getElementById("c3_message").innerHTML = "It dropped again very close to the 1 vs 1 line in 2015, but fortunately it seems that it has been able to recover a little bit by 2016";
};

var slide_6 = function() {

  document.getElementById("c3_message").innerHTML = "This is the end. Let's see if next year will bring more stability to EUR vs USD exchange rate";
};


var slides = [slide_0, slide_1, slide_2, slide_3, slide_4, slide_5, slide_6];

// cycle through slides

var current_slide = 0;

var run = function() {
  slides[current_slide]();
  current_slide += 1;

  if (current_slide === 1) {
    document.getElementById("start_btn").innerHTML = "Start";
  } else if (current_slide === slides.length) {
    current_slide = 0;
    document.getElementById("start_btn").innerHTML = "Replay";
  } else {
    document.getElementById("start_btn").innerHTML = "Continue";
  }
};

// button event handler

document.getElementById('start_btn').addEventListener("click", run);

// init

run();
