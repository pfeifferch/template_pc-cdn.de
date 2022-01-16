---
layout: default
title: Example Template
permalink: /content/themes/light-template/index.html
---
<!DOCTYPE html>
<html>
<head>
<title>{{ page.title | default: site.name }}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://template.pc-cdn.de/assets/fontawesome/v5.0.13/all.css">
<link rel="stylesheet" href="https://template.pc-cdn.de/content/themes/light-template/style.css">

</head>
<body>

<div class="header">
  {% include includes/header.html %} 
</div>

<div class="row">
  <div class="col-3 col-s-3 menu">
{% include includes/navigation.html %}
  </div>

  <div class="col-6 col-s-9">
    <h3>{{ page.title | default: site.name }}</h3>
    <p>{{ page.title | default: site.name }}</p>
  </div>

  <div class="col-3 col-s-12">
    <div class="aside">
      Hello World 
    </div>
  </div>
</div>

<div class="footer">
  {% include includes/footer.html %}
</div>

</body>
</html>
