<?php
/**
 * Created by PhpStorm.
 * User: stefan
 * Date: 07.09.17
 * Time: 15:55
 */


        /**
         * Melding als form verzonden is
         */
        if (isset($_GET['sendFeedback'])) { ?>

            <div class="col-md-12 successfully-sent">
                <p>Je aanvraag is verzonden we nemen zo snel mogelijk contact met u op.</p>
            </div>

        <?php }

        if (isset($_GET['CaptchaFail'])) { ?>

            <div class="col-md-12 successfully-sent fall">
                <p>Captcha fout. Probeer eens opnieuw.</p>
            </div>

        <?php } ?>