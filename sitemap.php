<?php

/**
 * 
 * Native PHP Class.
 * @author Jefferson mexkiv
 *
 */

$sitemap = new SimpleXMLElement('<?xml version="1.0" encoding="utf-8"?><urlset></urlset>');
$sitemap->addAttribute('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');
$sitemap->addAttribute('xmlns:xsi', 'http://www.w3.org/2001/XMLSchema-instance');
$sitemap->addAttribute('xsi:schemaLocation', 'http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd');

$pgn = $sitemap->addChild('url');
$pgn->addChild('loc', 'http://mexkiv.com.br');
$pgn->addChild('priority', '1.000');

header('Content-type: text/xml; charset=utf-8');
echo $sitemap->asXML();
exit();

/** END */
