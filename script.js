const container = document.getElementById('container');

function listener() {
	let wine = document.getElementById('wine');
	wine.addEventListener("click", e => {
		container.innerHTML += '&nbsp;<span class="letter letter-color letter-no-anim">I<span>s</span></span>&nbsp;<span class="letter letter-color letter-no-anim">N<span>o</span><span>t</span>&nbsp;<span>a</span><span>n</span></span>&nbsp;<span class="letter letter-color letter-no-anim">E<span>m</span><span>u</span><span>l</span><span>a</span><span>t</span><span>o</span><span>r</span></span>';
		listener();
	});
}

let wine = document.getElementById('wine');
wine.addEventListener("click", e => {
	container.innerHTML += '&nbsp;<span class="letter letter-color letter-animation letter-animation-i">I<span>s</span></span>&nbsp;<span class="letter letter-color letter-animation letter-animation-n">N<span>o</span><span>t</span>&nbsp;<span>a</span><span>n</span></span>&nbsp;<span class="letter letter-color letter-animation  letter-animation-e">E<span>m</span><span>u</span><span>l</span><span>a</span><span>t</span><span>o</span><span>r</span></span>';
	listener();
});