
var bardata10= [{ word:'test', ten: 30},
              { word: 'full', ten: 25}, 
              { word:'walk', ten: 22},
              {word: 'card', ten: 20},
              { word:'DSP', ten: 18},
              { word:'run', ten: 33},
              { word: 'tall', ten: 15}, 
              { word:'cat',  ten: 8},
              {word: 'small', ten: 14},
              { word:'PSR', ten: 7}
            ]

var bardata30=[{ word:'test', thirty: 150, ten: 30},
              { word: 'full', thirty: 75, ten: 25}, 
              { word:'walk', thirty: 125, ten: 22},
              { word: 'card', thirty: 175, ten: 20},
              { word:'DSP', thirty: 50, ten: 18},
              { word:'run', thirty: 45, ten: 33},
              { word: 'tall', thirty: 59, ten: 15}, 
              { word:'cat', thirty: 10, ten: 8},
              { word: 'small', thirty: 111, ten: 14},
              { word:'PSR', thirty: 96, ten: 7}
            ]

var bardata90=[{ word:'paper', ninety: 300, thirty: 150, ten: 30},
              { word: 'napkins', ninety: 200, thirty: 75, ten: 25}, 
              { word:'flour', ninety: 220, thirty: 125, ten: 22},
              { word: 'card', ninety: 200, thirty: 175, ten: 20},
              { word:'DSP', ninety: 150, thirty: 50, ten: 18},
              { word:'snap', ninety: 30, thirty: 45, ten: 33},
              { word: 'flower', ninety: 33, thirty: 59, ten: 15}, 
              { word:'trap', ninety: 200, thirty: 10, ten: 8},
              { word: 'clown', ninety: 250, thirty: 111, ten: 14},
              { word:'knot', ninety: 134, thirty: 96, ten: 7}
            ]

var bardataYtd=[{ word:'nap', ytd: 500, ninety: 300, thirty: 150, ten: 30},
              { word: 'full', ytd: 400, ninety: 200, thirty: 75, ten: 25}, 
              { word: 'marset', ytd: 200, ninety: 220, thirty: 125, ten: 22},
              { word: 'down', ytd: 200, ninety: 178, thirty: 175, ten: 20},
              { word: 'train', ytd: 100, ninety: 90, thirty: 50, ten: 18},
              { word: 'there', ytd: 90, ninety: 65, thirty: 45, ten: 33},
              { word: 'tall', ytd: 550, ninety: 400, thirty: 59, ten: 15}, 
              { word: 'dog', ytd: 333, ninety: 110, thirty: 10, ten: 8},
              { word: 'nook', ytd: 428, ninety: 390, thirty: 111, ten: 14},
              { word: 'book', ytd: 150, ninety: 100, thirty: 96, ten: 7}
            ]
/*var bardata= [{ data: [{ word:'test', count: 300}, {word:'walk', count: 350}, {word:'DSP', count: 212}, {word:'full', count: 150}, {word:'card', count: 100}], name: 'ninety'},
              { data: [{ word:'test', count: 200}, {word:'walk', count: 250}, {word:'DSP', count: 152}, {word:'full', count: 150}, {word:'card', count: 80}], name: 'sixty'},
              { data: [{ word:'test', count: 100}, {word:'walk', count: 150}, {word:'DSP', count: 75}, {word:'full', count: 150}, {word:'card', count: 20}], name: 'thirty'},
              { data: [{ word:'test', count: 50}, {word:'walk', count: 35}, {word:'DSP', count: 25}, {word:'full', count: 10}, {word:'card', count: 5}], name: 'ten'},
             ]*/
var margins = {
                top: 12,
                left: 48,
                right: 160,
                bottom: 24
                };
var legendPanel = {
                width: 100,
                height: 120
                };
var width = 700 - margins.left - margins.right - legendPanel.width;
var height = 400 - margins.top - margins.bottom;
var keys = ["ten", "thirty", "ninety", "ytd"];
var colors = ['#3C1642','#086375', '#1DD3B0', '#AFFC41']; //'#AFFC41'];
//init();
var btnHndlr = function(e){
                //alert("Hi");
                d3.selectAll("svg g")
                .remove()
                .exit();
                
                if (e.target !== e.currentTarget) {
                         switch(e.target.id){
                                case "btnYTD":
                                        updatebars(bardataYtd);
                                        break;
                                case "btnNinety":
                                        updatebars(bardata90)
                                        break;
                                case "btnThirty":
                                        updatebars(bardata30);
                                        break;
                                default:
                                        updatebars(bardata10);
                                        break;
                         }
                
                }
                e.stopPropagation();
        };



(function(){
        
        //alert(JSON.stringify(stackedseries));
        d3.select('#chart').append('svg')
                .style('background', '#E7E0CB')
                .attr('width', width + margins.right + margins.left)
                .attr('height', height + margins.top + margins.bottom)
        //Create Legend
        .append('rect')
                .attr('fill', 'grey')
                .attr('width', legendPanel.width)
                .attr('height', legendPanel.height)
                .attr('x', width + margins.left + 50)
                .attr('y', 5);

        var e = d3.select('#chart svg');
        keys.forEach(function (s, i) {        
                e.append('text')
                        .attr('fill', 'black')
                        .attr('x', width + margins.left + 90)
                        .attr('y', i * 24 + 24)
                        .text(s);                        
                e.append('rect')
                        .attr('fill', colors[i])
                        .attr('width', 20)
                        .attr('height', 20)
                        .attr('x', width + margins.left + 58)
                        .attr('y', i * 24 + 10);
                        //.attr('transform', 'translate('+ margins.left +', '+ (height + margins.top) +')');
        })

         //
        var g =document.querySelector("#btnrow");
        g.addEventListener("click", btnHndlr, false);
        //yes.onclick = btnHndlr;
        // function(){
        //          alert("hi");
        //  };
        // call 
        updatebars(bardata10);        

})();

function updatebars(data){
        var keyS = [];
        switch(true) {
                case ("ytd" in data[0]): 
                        keyS = ["ten", "thirty", "ninety", "ytd"];
                        break;
                case ("ninety" in data[0]):
                        keyS = ["ten", "thirty", "ninety"];
                        break;
                case ("thirty" in data[0]):
                        keyS = ["ten", "thirty"];
                        break;
                default: 
                        keyS = ["ten"];
                        break;
                }
        
        
        var stack = d3.stack()
                //.keys(["ten", "thirty", "sixty", "ninety"])
                .keys(keyS)
                //.keys(["ten"])
                .order(d3.stackOrderNone)
                .offset(d3.stackOffsetNone);

      var series = stack(data);
      var tooltip = d3.select("body").append("div")
                        .attr("class", "toolTip")
                        .attr("id", "tooltip");
      var xScale = d3.scaleLinear()
                .domain([0, d3.max(series[series.length - 1], function(d){return d[0] + d[1];}) ])
                .range([0, width]);
      var yScale = d3.scaleBand()
                .domain(data.map(function(d){ return d.word;}))
                .range([height, 0]).padding(.2);
      var  g = d3.select('svg')
        .selectAll('g.series')
                .data(series)
                .enter()
                .append('g')
                .classed('series', true)
                        .style('fill', function(d, i) {
                                return colors[i];
                        })
        .selectAll('rect')
                .data(function(d){
                        return d;
                })
                .enter()
                .append('rect')
                .attr('width', function(d) {
                        return xScale(d[1]) - xScale(d[0])
                })
                .attr('x', function(d) {
                        return xScale(d[0]) + margins.left;
                })
                .attr('y', function(d, i) {       
                        return yScale(d.data.word) + margins.top;
                })
                .attr('height', function(d){return yScale.bandwidth();})
                .on("mouseover", function(d,i){
                        tooltip
                        .style("left", d3.event.pageX - 70 + "px")
                        .style("top", d3.event.pageY - 90 + "px")
                        .style("display", "inline-block")
                        .html(i + ": " + (d[1]));
                        //.html(d.word + "<br>" + (d[1]));
                })
                .on("mouseout", function(d){ tooltip.style("display", "none");});;


        var vAxis = d3.axisLeft(yScale).ticks(10)
        var vGuide = d3.select('svg').append('g')
        vAxis(vGuide)
        vGuide.attr('transform', 'translate('+ margins.left +', '+ margins.top +')')      

        var hAxis = d3.axisBottom(xScale).ticks(10)               
        var hGuide = d3.select('svg').append('g')
        hAxis(hGuide)
        hGuide.attr('transform', 'translate('+ margins.left +', '+ (height + margins.top) +')')

}

