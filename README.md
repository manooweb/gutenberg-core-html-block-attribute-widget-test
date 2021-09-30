# gutenberg-core-html-block-attribute-widget-test

This an example of a custom block attribute added only for the `core/html` block (Custom HTML) with a simple input field to verify it will be correctly saved in the block widget screen.

It is a base to test the issue in the Gutenberg project.

## How to use

Simply put in your `wp-content/mu-plugins/` folder of your WordPress instance:
- the gutenberg-core-html-block-attribute-widget-test.php file
- the dist/ folder

You can then see the `Custom attributes` panel with `a custom attribute` field when a Custom HTML block is selected in the screen.

## What is the behaviours expected?

- Enter something in the `A custom attribute` field of a Custom HTML block in the block widget screen
- Save the block widget screen
- Refresh the block widget screen and you should see in the `A custom attribute` field the value previously entered

## How to test

- Add a Custom HTML in a empty widget area and enter a content in the block - a simple text for example
- Enter `A custom attribute` in the corresponding block attribute
- Save the widget screen
- Refresh the widget screen
- See that the `A custom attribute` field is again empty as at the beginning.
