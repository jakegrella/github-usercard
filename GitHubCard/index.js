import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios
// 	.get('https://api.github.com/users/jakegrella')
// 	.then((res) => {
// 		console.log(res);
// 	})
// 	.catch((drama) => {
// 		console.log(drama);
// 	});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const entry = document.querySelector('.cards');
axios
	.get('https://api.github.com/users/jakegrella')
	.then((res) => {
		const userCard = cardMaker({
			avatar_url: res.data.avatar_url,
			name: res.data.name,
			login: res.data.login,
			location: res.data.location,
			html_url: res.data.html_url,
			followers: res.data.followers,
			following: res.data.following,
			bio: res.data.bio,
		});
		entry.append(userCard);
	})
	.catch((err) => {
		console.log(err);
	});

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
	'tetondan',
	'dustinmyers',
	'justsml',
	'luishrd',
	'bigknell',
];
followersArray.forEach((i) => {
	axios
		.get(`https://api.github.com/users/${i}`)
		.then((res) => {
			const userCard = cardMaker({
				avatar_url: res.data.avatar_url,
				name: res.data.name,
				login: res.data.login,
				location: res.data.location,
				html_url: res.data.html_url,
				followers: res.data.followers,
				following: res.data.following,
				bio: res.data.bio,
			});
			entry.append(userCard);
		})
		.catch((err) => {
			console.log(err);
		});
});

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function cardMaker({
	avatar_url,
	name,
	login,
	location,
	html_url,
	followers,
	following,
	bio,
}) {
	//instantiate elements of card
	const card = document.createElement('div');
	const avatar = document.createElement('img');
	const cardInfo = document.createElement('div');
	const endName = document.createElement('h3');
	const username = document.createElement('p');
	const endLocation = document.createElement('p');
	const profile = document.createElement('p');
	const profileLink = document.createElement('a');
	const endFollowers = document.createElement('p');
	const endFollowing = document.createElement('p');
	const endBio = document.createElement('p');

	//structure
	card.append(avatar);
	card.append(cardInfo);
	cardInfo.append(endName);
	cardInfo.append(username);
	cardInfo.append(endLocation);
	cardInfo.append(profile);
	profile.append(profileLink);
	cardInfo.append(endFollowers);
	cardInfo.append(endFollowing);
	cardInfo.append(endBio);

	//class names
	card.classList.add('card');
	cardInfo.classList.add('card-info');
	endName.classList.add('name');
	username.classList.add('username');

	//text content
	avatar.src = avatar_url;
	endName.textContent = name;
	username.textContent = login;
	endLocation.textContent = location;
	profileLink.textContent = html_url;
	endFollowers.textContent = followers;
	endFollowing.textContent = following;
	endBio.textContent = bio;

	//return
	return card;
}
//test
// console.log(
// 	cardMaker({
// 		avatar_url: 'https://avatars1.githubusercontent.com/u/17218775?v=4',
// 		name: 'Jake Grella',
// 		login: 'jakegrella',
// 		location: 'Chicago, IL',
// 		html_url: 'https://github.com/jakegrella',
// 		followers: '2',
// 		following: '4',
// 		bio: 'hey',
// 	})
// );

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
