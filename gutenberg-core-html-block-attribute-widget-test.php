<?php
function gutenberg_core_html_block_attribute_widget_test_enqueue_script() {
	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_enqueue_script( 'gutenberg_core_html_attribute', WPMU_PLUGIN_URL . '/dist/gutenberg-core-html-block-attribute-widget-test' . $suffix . '.js', array(), '1.0.0', true );
}
add_action( 'admin_enqueue_scripts', 'gutenberg_core_html_block_attribute_widget_test_enqueue_script' );
