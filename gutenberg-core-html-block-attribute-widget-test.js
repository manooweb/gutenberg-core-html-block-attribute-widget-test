/**
 * Add blocks attributes
 *
 *  @package Polylang-Pro
 */

/**
 * WordPress Dependencies
 */
 import { __ } from '@wordpress/i18n';
 import { assign } from "lodash";
 import { createHigherOrderComponent } from "@wordpress/compose";
 import { addFilter } from "@wordpress/hooks";
 import { Fragment } from '@wordpress/element';
 import { InspectorControls } from '@wordpress/block-editor';
 import { PanelBody, TextControl } from '@wordpress/components';

 /**
  * Internal dependencies
  */

 const addCustomAttribute = function( settings, name ) {

	 const allowedBlockNames = [
		 'core/html',
	 ];

	 if ( ! allowedBlockNames.find( element => element === name ) ) {
		 return settings;
	 }
	 settings.attributes = assign(
		 settings.attributes,
		 {
			 manooweb_custom_attribute: {
				type: 'string',
				default: '',
			}
		 }
	 )
	 return settings;
 }

 addFilter(
	 'blocks.registerBlockType',
	 'manooweb/custom-attribute',
	 addCustomAttribute
 );

 const withInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {
	 return ( props ) => {

		return (
			 <Fragment>
				 <BlockEdit { ...props } />
				 <InspectorControls>
					 <PanelBody title={ __( 'Custom attributes' ) }>
						<TextControl
							className="custom-attribute-control"
							label={ __( 'A custom attribute:' ) }
							help={ __( 'Enter a value just for testing that the attribute is correctly saved.' ) }
							value={ props.attributes.manooweb_custom_attribute || '' }
							onChange={ ( nextValue ) => {
								props.setAttributes( {
									manooweb_custom_attribute: nextValue,
								} );
							} }
							autoCapitalize="none"
							autoComplete="off"
						/>
					 </PanelBody>
				 </InspectorControls>
			 </Fragment>
		 );
	 };
 }, "withInspectorControl" );

addFilter( 'editor.BlockEdit', 'manooweb/custom-attribute-with-inspector-controls', withInspectorControls );
