<script>
	import { asset, resolve } from '$app/paths';
</script>

<footer class="site-footer">
	<a class="footer-brand" href={ resolve("/") }>
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

<style>

.site-footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 80px 0px;
    background: var(--black);
    color: var(--white);
    text-align: center;
    border-bottom: 4px solid var(--red);
    border-top: 4px solid var(--red);
    height: 310px;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  width: 312px;
  position: relative;
  margin-top: -65px;
}

.footer-brand img:first-child {
  width: 312px;
  height: auto;
}

.site-footer address {
  font-style: normal;
  font-size: 26px;
  font-weight: 600;
  line-height: 1.32;
}

.site-footer address span {
  color: var(--red-bright);
}

.social-links {
  display: flex;
  gap: 43px;
  margin-top: 10px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  border: 4px solid var(--red);
  border-radius: 50%;
  background: var(--white);
  color: var(--black);
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  opacity:1;
  transition: all ease-in .1s;
}

.social-links a img {
  width: 66%;
}

.social-links a img:hover {
  opacity: .5;
  transition: all ease-in .1s;
}

@media(max-width: 720px){

  .site-footer {
    gap: 8px;
    padding: 42px 16px 18px;
    height: 200px;
  }

  .site-footer address {
    font-size: 14px;
  }

  .social-links {
    gap: 23px;
  }

  .social-links a {
    width: 52px;
    height: 52px;
    font-size: 11px;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9px;
    width: 200px;
    position: relative;
    margin-top: -83px;
  }

  .footer-brand img:first-child {
    width: 312px;
    height: auto;
  }


}
</style>