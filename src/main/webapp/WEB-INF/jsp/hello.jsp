<%@ page contentType = "text/html; charset = UTF-8" %>
<html>
<head>
    <title>AdSkip</title>
</head>

<body>
<button class="notify-btn">Notify</button>
<script>
    (function () {
        function notify() {
            if (!('Notification' in window)) {
                alert('Browser doesn\'t support notifications');
                return;
            }

            if (Notification.permission === 'denied') {
                console.warn('User blocked notifications');
                return;
            }

            if (Notification.permission !== 'granted') {
                Notification.requestPermission(function (permission) {
                    if (permission === 'granted') {
                        showNotification('Hello world');
                    }
                });
            } else {
                showNotification('Polsat - Koniec reklam');
            }

            function showNotification(message) {
                const options = {
                    body: message,
                };

                const notification = new Notification('AdSkip', options);
                notification.show();
            }
        }

        const $button = document.querySelector('.notify-btn');
        $button.addEventListener('click', notify);
    })();
</script>

</body>
</html>