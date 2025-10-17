<!--
        FOOTER SECTION
        Corresponds to Figma's "Footer" frame (ID 89:3943).
    -->
    <footer class="page-footer" data-node-id="desktop:89-3943, laptop:139-7262, mobile:181-1427">
        <div class="footer-main container" data-node-id="desktop:89-4283, laptop:139-7263, mobile:181-1428">
            <div class="footer-subscribe" data-node-id="desktop:89-4007, laptop:139-7264, mobile:181-1429">
                <!-- Site Logo -->
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo" data-node-id="desktop:89-4036, laptop:139-7797, mobile:181-1430">
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/images/svg/logo.svg" alt="<?php bloginfo('name'); ?> Logo" class="logo-image">
                </a>
                <!-- Email Input Form -->
                <form class="subscribe-form" data-node-id="desktop:89-4010, laptop:139-7280, mobile:181-1445">
                    <input type="email" placeholder="Enter Your Email" name="email_address" required>
                    <button type="submit" aria-label="Subscribe" class="icon-button">
                        <!-- Ideally, replace with an actual send icon SVG -->
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 2L11 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    </button>
                </form>
            </div>
            
            <nav class="footer-nav" data-node-id="desktop:89-3966, laptop:139-7289, mobile:181-1454">
                <div class="footer-nav-column">
                    <h4>Home</h4>
                    <?php wp_nav_menu( array( 'theme_location' => 'footer_one', 'container' => false, 'menu_class' => '' ) ); ?>
                </div>
                <div class="footer-nav-column">
                    <h4>About Us</h4>
                    <?php wp_nav_menu( array( 'theme_location' => 'footer_two', 'container' => false, 'menu_class' => '' ) ); ?>
                </div>
                <div class="footer-nav-column">
                    <h4>Properties</h4>
                    <?php wp_nav_menu( array( 'theme_location' => 'footer_three', 'container' => false, 'menu_class' => '' ) ); ?>
                </div>
                <div class="footer-nav-column">
                    <h4>Services</h4>
                    <?php wp_nav_menu( array( 'theme_location' => 'footer_four', 'container' => false, 'menu_class' => '' ) ); ?>
                </div>
                <div class="footer-nav-column">
                    <h4>Contact Us</h4>
                    <?php wp_nav_menu( array( 'theme_location' => 'footer_five', 'container' => false, 'menu_class' => '' ) ); ?>
                </div>
            </nav>
        </div>

        <div class="footer-bottom" data-node-id="desktop:89-4020, laptop:139-7324, mobile:181-1494">
            <div class="container footer-bottom-container"> 
                <div class="footer-legal" data-node-id="desktop:89-4021, laptop:139-7325, mobile:181-1508">
                    <span>@<?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All Rights Reserved.</span>
                    <a href="<?php echo esc_url( get_permalink( get_page_by_path( 'terms-and-conditions' ) ) ); ?>">Terms & Conditions</a>
                </div>
                <div class="footer-social" data-node-id="desktop:89-4024, laptop:139-7328, mobile:181-1495">
                    <!-- Add your social media SVGs and links here -->
                    <a href="#" aria-label="Facebook" class="icon-button"></a>
                    <a href="#" aria-label="LinkedIn" class="icon-button"></a>
                    <a href="#" aria-label="Twitter" class="icon-button"></a>
                    <a href="#" aria-label="YouTube" class="icon-button"></a>
                </div>
            </div>
        </div>
    </footer>
    
    <?php wp_footer(); ?>
</body>
</html>