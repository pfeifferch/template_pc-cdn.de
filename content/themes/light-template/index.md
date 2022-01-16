<!DOCTYPE html>
<html>
<head>
<title>{{ page.title | default: site.name }}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://disposabl.email/assets/fontawesome/v5.0.13/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
<link rel="stylesheet" href="https://disposabl.email/assets/fontawesome/v5.0.13/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">

</head>
<body>

<div class="header">
  <?php include "./includes/header.php"; ?> 
</div>

<div class="row">
  <div class="col-3 col-s-3 menu">
<?php include "./includes/navigation.php"; ?>
  </div>

  <div class="col-6 col-s-9">
    <h3>{{ page.title | default: site.name }}</h3>
    <p>{{ page.title | default: site.name }}</p>
  </div>

  <div class="col-3 col-s-12">
    <div class="aside">
      <?php include "./includes/form.php"; ?>
    </div>
  </div>
</div>

<div class="footer">
  <?php include "./includes/footer.php"; ?>
</div>

</body>
</html>
