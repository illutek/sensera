<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">
  <title>Sensera</title>
</head>
<body>
<div class="container">
  <header class="header">
    <img src="images/sencera.png" alt="sensera">
  </header>
  <div class="row">
    <div class="col-md-6 content-wrap">
      <div class="content">
        <h1>Sensera Juwelen</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias, animi consequatur cupiditate
          deleniti eos impedit iste iure nobis odit porro qui saepe ut vero voluptatem. Libero odit quam quos?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, placeat!</p>
        <p>Marina</p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-region">
        <h3>Mij contacteren</h3>
          <?php include_once 'sendFeedback.inc.php'; ?>

        <div class="form">
          <form method="post" action="<?PHP echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" accept-charset="UTF-8">
            <div class="form-group">
              <label for="">Uw naam</label>
              <input type="text" class="form-control" required="required" name="naam"
                     value="<?PHP if (isset($_POST['name'])) echo htmlspecialchars($_POST['name']); ?>">
            </div>
            <div class="form-group">
              <label for="">Uw e-mail</label>
              <input type="email" class="form-control" required="required" name="email"
                     value="<?PHP if (isset($_POST['email'])) echo htmlspecialchars($_POST['email']); ?>">
            </div>
            <div class="form-group">
              <label for="">Uw vraag</label>
              <textarea required="required" class="form-control" name="bericht"
              ><?PHP if (isset($_POST['message'])) echo htmlspecialchars($_POST['message']); ?></textarea>
            </div>
            <div class="g-recaptcha" data-sitekey="6Lf7viYUAAAAAAezZLrUn9wA0GMpzpxGUYz7xsEX"></div>
            <input class="btn btn-default" type="submit" name="sendfeedback" value="Verzenden">
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</body>
</html>