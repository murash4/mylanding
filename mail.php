<?php
	if(empty($_GET['submit'])) {
		/* Осуществляем проверку вводимых данных и их защиту от враждебных скриптов */
		$name = trim(htmlspecialchars($_POST["name"]));
		$email = trim(htmlspecialchars($_POST["email"]));
		$phone = trim(htmlspecialchars($_POST["phone"]));
		$tema = "Заказ на сайт";
		$message = trim(htmlspecialchars($_POST["message"]));
		/* Устанавливаем e-mail адресата */
		$myemail = "singleant@gmail.com";
		/* Создаем новую переменную, присвоив ей значение */
		$message_to_myemail = "Здравствуйте! 
		Вашей контактной формой было отправлено сообщение! 
		Имя отправителя: $name 
		E-mail: $email 
		Телефон: $phone 
		Текст сообщения: $message 
		";
		/* Отправляем сообщение, используя mail() функцию */
		$from  = "From: $name <$email> \r\n Reply-To: $email \r\n"; 
		mail($myemail, $tema, $message_to_myemail, $from);
	}
?>