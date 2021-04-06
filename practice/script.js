var apiKey = 'LWxSqYatdplE3OeXhPTKjm1PHsfDDVflXSPguuUtViYdrQMY1c'; // assign our key to a variable, easier to read
var secret = "kWGAVp8RvLCQqmYSGVA9danmtZydlMw6CufLt6CR"
var grant_type = "client_credentials"
var access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJMV3hTcVlhdGRwbEUzT2VYaFBUS2ptMVBIc2ZERFZmbFhTUGd1dVV0VmlZZHJRTVkxYyIsImp0aSI6ImY2ODE4ZGNkZjEwNzgzNjc1NzA5YzM4MDExMGVmNTkxMTNmYjU2NjcxNTI3ZDkxZWU2ZTRhOGZiZGFjMDAxOTQwNjU4ZWZlY2EzMmMxODg5IiwiaWF0IjoxNjE3NDU5NTUwLCJuYmYiOjE2MTc0NTk1NTAsImV4cCI6MTYxNzQ2MzE1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.YD3XMa97neb5YMz0VGEiAPxcPZL_cl7VPDu5UjpGXe6yxWxPv3EDFVxV_hfE0iS_MmtbHTwnAGqy8-tRuE0mtRdTIdZV5XIhATQvijBlE00FzQnSFoXPVFOOKoY90t3eNnJu1JiYxsShKFX1BiqAsLmRfVrTo4a746HLrgZAlOV7XzIUIMvNUV-r8urBfeiYN1PTmNq4qb3yTJngl60fZw8iqdDxJ-SE8W8jC9mrd985u5n-Ee-s8IPuQplId57ksJnIoIwMeFPU88NQV_xvzb-lJQuSYmoGlVWAQQcgNI-v9fz8vJUsNomyMr2UPnvmHyczF6jUECmFitDj6gi5aA"
var token, tokenType, expire;

// the next line and function set up the button in our html to be clickable and reactive 
document.addEventListener('DOMContentLoaded', bindButtons);

get = "https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/animals?type=dog&page=2"
post = `https://cors-anywhere.herokuapp.com/https://api.petfinder.com/v2/oauth2/token`
details = {
    'grant_type': grant_type,
    'client_id': apiKey,
    'client_secret': secret,
	'token': access_token,
}

var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

fetch(post, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
  },
  body: formBody
}).then(function (response) {
    return response.json();
  })
  .then(function (data) {
    fetch(get, {    
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${data.access_token}`
          },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
  });






function bindButtons(){

	// document.getElementById('submitZip').addEventListener('click', function(event){
	// 	event.preventDefault();
	// 	var zip = document.getElementById('zip').value; // this line gets the zip code from the form entry
	// 	var url = 'http://api.petfinder.com/pet.getRandom';
		
	// 	// Within $.ajax{...} is where we fill out our query 
	// 	$.ajax({
	// 		url: url,
	// 		jsonp: "callback",
	// 		dataType: "jsonp",
	// 		data: {
	// 			key: apiKey,
	// 			animal: 'cat',
	// 			location: zip,
	// 			output: 'basic',
	// 			format: 'json'
	// 		},
	// 		// Here is where we handle the response we got back from Petfinder
	// 		success: function( response ) {
	// 			console.log(response); // debugging
	// 			var catName = response.petfinder.pet.name.$t;
	// 			var img = response.petfinder.pet.media.photos.photo[0].$t;
	// 			var id = response.petfinder.pet.id.$t;

	// 			var newName = document.createElement('a');
	// 			var newDiv = document.createElement('div');
	// 			newName.textContent = catName;
	// 			newName.href = 'https://www.petfinder.com/petdetail/' + id;

	// 			var newImg = document.createElement('img');
	// 			newImg.src = img;
				
	// 			var list = document.createElement("div");
	// 			list.setAttribute("id", "List");
	// 			document.body.appendChild(list);

	// 			newDiv.appendChild(newName);
	// 			list.appendChild(newDiv);
	// 			list.appendChild(newImg);
	// 		}
	// 	});
	// 	})

}

// http://api.petfinder.com/pet.getRandom?callback=jQuery31101449376130970108_1617325584907&key=2f95f51b181ddd27883e91878e922466&animal=cat&location=04101&output=basic&format=json&_=1617325584908