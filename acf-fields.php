<?php
// /wp-content/themes/estatein/acf-fields.php

if( function_exists('acf_add_local_field_group') ):

acf_add_local_field_group(array(
	'key' => 'group_property_details', // A unique key for the group
	'title' => 'Property Details',
	'fields' => array(
		array(
			'key' => 'field_bedrooms', // Unique key for this field
			'label' => 'Bedrooms',
			'name' => 'bedrooms',
			'type' => 'text',
			'instructions' => 'Example: 4-Bedroom',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_bathrooms',
			'label' => 'Bathrooms',
			'name' => 'bathrooms',
			'type' => 'text',
			'instructions' => 'Example: 3-Bathroom',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_property_type',
			'label' => 'Property Type',
			'name' => 'property_type',
			'type' => 'text',
			'instructions' => 'Example: Villa, Apartment',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
		array(
			'key' => 'field_price',
			'label' => 'Price',
			'name' => 'price',
			'type' => 'text',
			'instructions' => 'Example: $550,000',
			'required' => 0,
			'conditional_logic' => 0,
			'wrapper' => array(
				'width' => '',
				'class' => '',
				'id' => '',
			),
			'default_value' => '',
			'placeholder' => '',
			'prepend' => '',
			'append' => '',
			'maxlength' => '',
		),
	),
	'location' => array(
		array(
			array(
				'param' => 'post_type',
				'operator' => '==',
				'value' => 'property',
			),
		),
	),
	'menu_order' => 0,
	'position' => 'normal',
	'style' => 'default',
	'label_placement' => 'top',
	'instruction_placement' => 'label',
	'hide_on_screen' => '',
	'active' => true,
	'description' => '',
));

endif;