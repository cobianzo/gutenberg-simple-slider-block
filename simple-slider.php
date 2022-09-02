<?php
/**
 * Plugin Name:       Simple Slider
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       coco-blocks
 *
 * @package           coco-blocks
 */


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function coco_blocks_simple_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'coco_blocks_simple_slider_block_init' );


/** Load js in frontend the library to make the slider work  */
add_action( 'enqueue_block_assets', 'myplugin_enqueue_if_block_is_present' );  // Can only be loaded in the footer
// add_action( 'wp_enqueue_scripts', 'myplugin_enqueue_if_block_is_present' ); // Can be loaded in the both in head and footer
function myplugin_enqueue_if_block_is_present() {
	$version = '1.2';
	if (is_admin()) return;

	if ( has_block( 'coco-blocks/simple-slider' ) ) {
		wp_enqueue_script(
			'simple-slider-js',
			plugin_dir_url( __FILE__ ) . '/build/frontend.js', // this is the js needed to make the slider work in frontend. In backend we dont need it.
			array(),
			$version,
			true
		);

				wp_enqueue_style(
					'simple-slider-css',
					//plugin_dir_url( __FILE__ ) . '/node_modules/@splidejs/splide/dist/css/splide.min.css',
						plugin_dir_url( __FILE__ ) . '/build/frontend.css',
					array(),
					$version
				);
	}
}
