// APPLICATION VARIABLES
// DOM ELEMENTS
// SET EVENT LISTENERS/HANDLERS
// API CALLS
// var omdbURL = "http://www.omdbapi.com/?apikey=trilogy&t=" + titleArray[i] 
// var titleArray = ["isle+of+dogs", "alita:+battle+angel", "the+green+room", "inglourious+basterds", "snowpiercer", "moonlight", "oh+youth!", "the+housemaid", "the+social+network", "roma", "blackkklansman",]
// $.ajax({
//     url:
//     method:
// }).then(function(response){

// });

var queryURL = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=a60b3a8bc5eefd424c235053a3248b79&append_to_response=videos,images"
//var titleArray = ["isle+of+dogs"-0, "alita:+battle+angel"-1, "green+room"-2, "inglourious+basterds"-3, "snowpiercer"-4, "moonlight"-5, "oh+youth!"-6, "the+housemaid"-7, "the+social+network"-8, "roma"-9, "blackkklansman"-10, "miracle+in+cell+no.+7"-11, "parasite"-12, "shutter+island"-13, "atomic+blonde"-14, "catch+me+if+you+can"-15, "the+truman+show"-16, "gone+girl"-17, "a+taxi+driver"-18, "the+handmaiden"-19, "memoirs+of+a+geisha"-20, "palmeras+en+la+nieve"-21, "house+of+flying+daggers"-22, "a+frozen+flower"-23, "he+even+has+your+eyes"-24, "the+beauty+inside"-25, "dooman+river"-26, "bride+and+prejudice"-27, "spring+in+a+small+town"-28, "saving+private+ryan"-29, "21+bridges"-30, "august+rush"-31, "the+imitation+game"-32, "room"-33, "the+man+from+u.n.c.l.e."-34, "us"-35, "selena"-36, "42"-37, "coco"-38, "heathers"-39, "train+to+busan"-40, "devdas"-41, "i+am+sam"-42, "the+invisible+man"-43, "the+devil+prada"-44, "crazy+stupid+love"-45]
var titleArray = ["399174", "399579", "313922", "16869", "110415", "376867", "291979", "42506", "37799", "426426", "487558", "158445-7", "496243", "11324", "341013", "640", "37165", "210577", "437068", "290098", "1904", "274109", "9550", "17903", "398920", "338729", "57825", "21058", "857", "535292", "205596", "264644", "203801", "458723", "16052", "109410", "354912", "2640", "396535", "15917", "10950", "570670", "350", "50646" ]
//to show a movie to the user, the movies in the array will be converted to the ids (from the moviedatabase.org). Then a random id will be generated, put into the queryURL and the ajax call will be made.
//the random movie will be displayed on the screen for the user to learn more about. This is the easiest method to use, as a search has the potential to bring back too many results. 
$.ajax({
        url:
        method:
    }).then(function(response){
    
    }); 
//API RESPONSES
// APPLICATION LOGIC
// STORAGE
