<?php get_header(); ?>

    <!--
        MAIN CONTENT
        Wraps all primary sections of the page for semantic clarity.
    -->
    <main>
        <!--
            HERO SECTION
            Corresponds to the content within "Container" (ID 121:1772) in your Figma file.
            This is structured as a two-column layout on desktop.
        -->
        <section class="hero" data-node-id="desktop:121-1772, laptop:139-6330, mobile:139-7904">
            <div class="container">
                <div class="hero-container" data-node-id="desktop:121-1773, laptop:139-6331, mobile:139-8084">
                    <!-- HERO Image [1st element on mobile / Right side on desktop] (ID desktop:121-1828) -->
                    <div class="hero-image" data-node-id="desktop:121-1828, laptop:139-6386, mobile:139-8022">
                        <!-- Image with overlay from Figma (ID 121:1889) -->
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/images/hero-image.png" alt="Modern house with a pool">
                    </div>
                    <!-- HERO Content [2nd element on mobile / Left side on desktop] -->
                    <div class="hero-content">
                        <h1>Discover Your Dream Property with Estatein</h1>
                        <p>Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
                        <div class="hero-actions" data-node-id="desktop:121-1813, laptop:139-6371, mobile:139-7943">
                            <a href="#" class="button" data-node-id="desktop:121-1814, laptop:139-6372, mobile:139-7944">Learn More</a>
                            <a href="#" class="button button-primary" data-node-id="desktop:121-1816, laptop:139-6374, mobile:139-7946">Browse Properties</a>
                        </div>
                        <div class="hero-stats" data-node-id="desktop:121-1818, laptop:139-6376, mobile:139-7948">
                            <div class="stat-item" data-node-id="desktop:121-1819, laptop:139-6377, mobile:139-8492">
                                <span class="stat-number">200+</span>
                                <span class="stat-label">Happy Customers</span>
                            </div>
                            <div class="stat-item" data-node-id="desktop:121-1822, laptop:139-6380, mobile:139-7952">
                                <span class="stat-number">10k+</span>
                                <span class="stat-label">Properties For Clients</span>
                            </div>
                            <div class="stat-item" data-node-id="desktop:121-1825, laptop:139-6383, mobile:139-7955">
                                <span class="stat-number">16+</span>
                                <span class="stat-label">Years of Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!--
            ICON GRID SECTION
            Corresponds to the three cards under the hero (IDs 121:1892, 121:1899, 121:1907).
        -->
        <section class="icon-grid" data-node-id="desktop:121:1890, laptop:139-6448, mobile:139-8120">
            <div class="container-full-width">
                <div class="grid-container">
                    <article class="grid-item" data-node-id="desktop:121-1891, laptop:139-6449, mobile:139-8121">
                        <div class="icon-wrapper-purple">
                            <!-- Icon would go here -->
                        </div>
                        <h3>Find Your Dream Home</h3>
                    </article>
                    <article class="grid-item" data-node-id="desktop:121-1899, laptop:139-6457, mobile:139-8130">
                        <div class="icon-wrapper-purple">
                            <!-- Icon would go here -->
                        </div>
                        <h3>Unlock Property Value</h3>
                    </article>
                    <article class="grid-item" data-node-id="desktop:121-1907, laptop:139-6465, mobile:139-8138">
                        <div class="icon-wrapper-purple">
                            <!-- Icon would go here -->
                        </div>
                        <h3>Effortless Property Management</h3>
                    </article>
                    <article class="grid-item" data-node-id="desktop:121-1915, laptop:139-6473, mobile:139-8147">
                        <div class="icon-wrapper-purple">
                            <!-- Icon would go here -->
                        </div>
                        <h3>Smart Investments, Informed Decisions</h3>
                    </article>
                </div>
            </div>
        </section>

        <!-- FEATURED PROPERTIES SECTION (ID 87:1301) -->
        <section class="featured-properties" data-node-id="desktop:87-1301, laptop:139-6487, mobile:139-8155">
            <div class="container">
                <div class="section-header" data-node-id="desktop:60-3180, laptop:139-6488, mobile:139-8492">
                    <div class="header-text" data-node-id="desktop:46-358, laptop:139-6489, mobile:139-8493">
                        <h2>Featured Properties</h2>
                        <p>Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.</p>
                    </div>
                    <a href="#" class="button" data-node-id="desktop:60-3178, laptop:139-6331, mobile:139-8481">View All Properties</a>
                </div>

                <!-- Grid of property cards (ID 87:1274) -->
                <div class="properties-grid" data-node-id="desktop:87-1274, laptop:139-6517">
                    <!--
                        PROPERTY CARD (Repeatable Item)
                        Corresponds to "Card" frames (e.g., ID 75:564).
                        This structure is repeated for each property.
                        3 in a row on laptop/desktop, 2 in a row on tablet, 1 in a row on mobile.
                    -->
                    <article class="property-card" data-node-id="desktop:75-564, laptop:139-6518, mobile:139-8306">
                        <img src="./assets/images/property-seaside-villa.jpg" alt="Seaside Serenity Villa" class="card-image" data-node-id="desktop:75-544, laptop:139-6519, mobile:139-8307">
                        <div class="card-body" data-node-id="desktop:87-1215, laptop:139-6520, mobile:139-8308">
                            <h3>Seaside Serenity Villa</h3>
                            <p>A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... <a href="#">Read More</a></p>
                            <div class="card-features" data-node-id="desktop:87-1238, laptop:139-6524, mobile:139-8312">
                                <span class="feature-tag" data-node-id="desktop:87-1234, laptop:139-6525, mobile:139-8313">4-Bedroom</span>
                                <span class="feature-tag" data-node-id="desktop:87-1241, laptop:139-6531, mobile:139-8319">3-Bathroom</span>
                                <span class="feature-tag" data-node-id="desktop:87-1245, laptop:139-6540, mobile:139-8328">Villa</span>
                            </div>
                            <div class="card-footer" data-node-id="desktop:75-557, laptop:139-6549, mobile:139-8337">
                                <div class="price">
                                    <span class="price-label">Price</span>
                                    <span class="price-value">$550,000</span>
                                </div>
                                <a href="#" class="button button-primary" data-node-id="desktop:75-561, laptop:139-6553, mobile:139-8341">View Property Details</a>
                            </div>
                        </div>
                    </article>

                    <!-- Repeat the <article> for other property cards -->
                    <article class="property-card">
                        <!-- Content for Metropolitan Haven -->
                    </article>

                    <article class="property-card">
                        <!-- Content for Rustic Retreat Cottage -->
                    </article>
                </div>

                <div class="section-pagination" data-node-id="desktop:75-596, laptop:139-6629, mobile:139-8481">
                    <span>01 of 60</span>
                    <div class="pagination-buttons" data-node-id="desktop:75-595, laptop:139-6631, mobile:139-8484">
                        <button class="icon-button" aria-label="Previous Page" data-node-id="desktop:75-593, laptop:139-6632, mobile:139-8485"></button>
                        <button class="icon-button" aria-label="Next Page" data-node-id="desktop:75-594, laptop:139-6635, mobile:139-8488"></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- TESTIMONIALS SECTION (ID 75:599) -->
        <section class="testimonials" data-node-id="desktop:75-599, laptop:139-6688, mobile:139-8155">
            <div class="container"> 
                <div class="section-header" data-node-id="desktop:75-600, laptop:139-6689, mobile:139-8447">
                    <div class="header-text" data-node-id="desktop:75-601, laptop:139-6690, mobile:139-8448">
                        <h2>What Our Clients Say</h2>
                        <p>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                    </div>
                    <a href="#" class="button" data-node-id="desktop:75-626, laptop:139-6715">View All Testimonials</a>
                </div>

                <div class="testimonials-grid" data-node-id="desktop:75-679, laptop:139-6717">
                    <!-- TESTIMONIAL CARD (Repeatable) -->
                    <article class="testimonial-card" data-node-id="desktop:75-870, laptop:139-6719">
                        <div class="card-rating" data-node-id="desktop:75-871, laptop:139-6720">
                            <!-- Star icons would go here -->
                        </div>
                        <div class="card-body">
                            <h3>Exceptional Service!</h3>
                            <blockquote>
                                <p>"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"</p>
                            </blockquote>
                        </div>
                        <div class="card-author" data-node-id="desktop:75-885, laptop:139-6734">
                            <img src="./path-to-wade-warren.jpg" alt="Wade Warren" data-node-id="desktop:75-886, laptop:139-6735">
                            <div class="author-info">
                                <span class="author-name">Wade Warren</span>
                                <span class="author-location">USA, California</span>
                            </div>
                        </div>
                    </article>

                    <!-- Repeat for other testimonials -->
                    <article class="testimonial-card">
                        <!-- ... -->
                    </article>
                    <article class="testimonial-card">
                        <!-- ... -->
                    </article>
                </div>

                <div class="section-pagination" data-node-id="desktop:130:6081, laptop:139:6810, mobile:139:8481">
                    <span>01 of 10</span>
                    <div class="pagination-buttons">
                        <button class="icon-button" aria-label="Previous Page"></button>
                        <button class="icon-button" aria-label="Next Page"></button>
                    </div>
                </div>
            </div>
        </section>

        <!-- FAQ SECTION (ID 75:952) -->
        <section class="faq container" data-node-id="desktop:75-952, laptop:139-6819, mobile:139-8155">
            <div class="section-header" data-node-id="desktop:75-953, laptop:139-6820, mobile:139-8447">
                <div class="header-text" data-node-id="desktop:75-954, laptop:139-6821, mobile:139-8448">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
                </div>
                <a href="#" class="button" data-node-id="desktop:75-979, laptop:139-6846, mobile:139-8412">View All FAQ’s</a>
            </div>

            <div class="faq-grid" data-node-id="desktop:78-1088, laptop:139-6848">
                <article class="faq-item" data-node-id="desktop:78-1175, laptop:139-6850">
                    <h3>How do I search for properties on Estatein?</h3>
                    <p>Learn how to use our user-friendly search tools to find properties that match your criteria.</p>
                    <a href="#" class="button" data-node-id="desktop:78-1178, laptop:139-6853">Read More</a>
                </article>

                <!-- Repeat for other FAQ items -->
                <article class="faq-item">
                    <!-- ... -->
                </article>
                <article class="faq-item">
                    <!-- ... -->
                </article>
            </div>

            <div class="section-pagination" data-node-id="desktop:130:6090, laptop:139:6896, mobile:139:8481">
                <span>01 of 10</span>
                <div class="pagination-buttons">
                    <button class="icon-button" aria-label="Previous Page"></button>
                    <button class="icon-button" aria-label="Next Page"></button>
                </div>
            </div>
        </section>

        <!-- CALL TO ACTION (CTA) SECTION (ID 89:4284) -->
        <section class="cta" data-node-id="desktop:89-4284, laptop:139-6905, mobile:181-1427">
            <div class="container"> 
                <div class="cta-container" data-node-id="desktop:181-2, laptop:181-358, mobile:181-1428">
                    <div class="cta-text" data-node-id="desktop:181-353, laptop:181-709, mobile:181-1428">
                        <h2>Start Your Real Estate Journey Today</h2>
                        <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>
                    <a href="#" class="button button-primary" data-node-id="desktop:181-356, laptop:181-712, mobile:181-1425">Explore Properties</a>
                </div>
            </div>
        </section>

    </main>

<?php get_footer(); ?>