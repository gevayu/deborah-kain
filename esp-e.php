<?php
add_filter('elementor/widget/render_content', function ($c) {
    $t = get_queried_object();
    if (!is_object($t) || empty($t->term_id)) {
        return $c;
    }
    if (strpos($c, 'אספרסו מו') !== false) {
        $d = $t->description;
        return $d ? wpautop($d) : $c;
    }
    if (strpos($c, 'איך לבחור מכונת קפה') !== false) {
        $o = get_term_meta($t->term_id, 'esp_outro', true);
        return $o ? '<h3>איך בוחרים</h3>' . wpautop($o) : $c;
    }
    return $c;
}, 10, 1);
