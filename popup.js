// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var req = new XMLHttpRequest();
req.open(
  "GET",
  "http://mavidurak.github.io/feed.xml",
  true
);

function showArticles() {
  var articles = req.responseXML.getElementsByTagName("item"), i, atag, linkURL, div;
  for (i = 0; i < 5; i++) {
    div = document.createElement('div');
    atag = document.createElement("a");
    linkURL = articles[i].getElementsByTagName("link").item(0).firstChild.nodeValue;
    atag.href = linkURL;
    atag.target = "_blank";
    atag.appendChild(articles[i].getElementsByTagName("title").item(0));
    div.appendChild(atag);
    document.body.appendChild(div);
  }
}
req.onload = showArticles;
req.send(null);