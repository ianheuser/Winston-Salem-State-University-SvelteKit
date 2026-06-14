<script>
	import { asset, base } from '$app/paths';
</script>

<footer class="site-footer">
	<a class="footer-brand" href={`${base}/`}>
		<img src={ asset("/images/centered-logo.png") } alt="Winston-Salem State University" />
	</a>
	<address>
		601 S. Martin Luther King Jr. Drive<br />
		Winston-Salem, NC 27110 <span>|</span> 336-750-2000
	</address>
	<div class="social-links" aria-label="Social links">
		<a href="https://www.facebook.com/WSSU1892" aria-label="Facebook"><img src={ asset("/images/facebook.png") } alt="Facebook Logo" /></a>
		<a href="http://www.instagram.com/wssu1892" aria-label="Instagram"><img src={ asset("/images/instagram.png") } alt="Instagram Logo" /></a>
		<a href="https://www.youtube.com/wssu1892" aria-label="YouTube"><img src={ asset("/images/youtube.png") } alt="You Tube Logo" /></a>
		<a href="https://www.linkedin.com/company/winston-salem-state-university/" aria-label="LinkedIn"><img src={ asset("/images/linked-in.png") }  alt="LinkedIn Logo" /></a>
	</div>
</footer>
