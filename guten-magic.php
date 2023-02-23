<?php
/**
 * Plugin Name: Guten Magic
 * Plugin URI: https://wordpress.org
 * Description: Guten Magic a plugin for WordPress that allows you to easily create custom content layouts.
 * Version: 1.0.0
 * Author: Adnan
 * Author URI: https://osmanhaideradnan.wordpress.com/
 * Author URI:
 * Text Domain: guten-magic
 * Requires at least: 5.9
 * Requires PHP: 7.2
 *
 */

 if( ! defined( 'ABSPATH' ) ) {
    exit;
 }


 final class Guten_Magic {
    public function __construct() {
        add_action( 'enqueue_block_editor_assets', array( $this, 'guten_magic_block_assets' ) );
    }

    public function guten_magic_block_assets() {
        wp_enqueue_script( 'guten-magic-block', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
        wp_enqueue_script( 'guten-magic-basic-info', plugin_dir_url(__FILE__) . 'build/basic-info/index.js', array('wp-blocks', 'wp-element'));
    }
 }

 new Guten_Magic();