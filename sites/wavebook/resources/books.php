
<?php
$xml = new SimpleXMLElement(file_get_contents("books.xml"));
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
    <head>
        <link rel="stylesheet" type="text/css"
            href="css1/bookscss.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title></title>
    </head>
    <body>
        <?php
            echo "<div id=\"parent\" >";
            echo "<h3 class=\"header\">Some books that I have found to be helpful</h3>";
            echo "<p class =\"free\">Free Manuscript of <b>Wavelets and SubBand Coding</b>";
            echo " is available at the";
            echo "<a href=\"http://waveletsandsubbandcoding.org\"> Book Website</a>";
            echo "</p>";
            echo "<p class=\"recbooks\">";
            foreach ($xml->book as $book) {
            echo "Title: " . $book->title;
            echo "<br \>";
            echo "Author(s): " . $book->author;
            echo "<br \>";
            echo ":: <a href=\"" . $book->link. "\">Book Website </a>";
            echo "<br \> <br \>";
        }
            echo "</p> </div>";
        ?>
         
    </body>
</html>
