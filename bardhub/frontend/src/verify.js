export function verify(user){
	if(user.Artist_trigger==1){
		console.log(user);
		return user.username + "✓";
	}
	return user.username;
}