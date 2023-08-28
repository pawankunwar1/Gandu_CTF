<?php
// Example of flag verification
$submittedFlag = trim($_GET['flag']);
$correctFlag = 'Gandu-CTF{Congratulatons You have found a flag}';

if ($submittedFlag === $correctFlag) {
    echo 'correct';
} else {
    echo 'incorrect';
}
?>
