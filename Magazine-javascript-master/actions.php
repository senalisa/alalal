<?php
/**
 * @return array
 */
function getMuseum()
{
    return [
        [
            "id" => 1,
            "name" => "Van Gogh Musuem",
            "sort" => "Amsterdam",
        ],
        [
            "id" => 2,
            "name" => "Moco Museum",
            "sort" => "Amsterdam",
        ],
        [
            "id" => 3,
            "name" => "Louvre",
            "sort" => "Paris",
        ],
        [
            "id" => 4,
            "name" => "Musee d'Orsay",
            "sort" => "Paris",
        ],
        [
            "id" => 5,
            "name" => "Petit Palais",
            "sort" => "Paris",
        ],
        [
            "id" => 6,
            "name" => "Rijksmuseum",
            "sort" => "Amsterdam",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getDishDetails($id)
{
    $tags = [
        1 => [
            "info" => "Vincent Willem van Gogh was een Nederlands kunstschilder,...",
            "tags" => ['Zonnebloem', 'De slaapkamer', 'De Sterrennacht']
        ],
        2 => [
            "info" => "Het Moco Museum is een particulier museum gevestigd in...",
            "tags" => ['Kaws', 'Banksy', 'Girl with balloon', 'Diamond Matrix']
        ],
        3 => [
            "info" => "Het Louvre is een van 's werelds grootste musea...",
            "tags" => ['Mona Lisa', 'De Lamassu', 'De Sfinx']
        ],
        4 => [
            "info" => "Het Musée d'Orsay in Parijs is een kunstmuseum dat...",
            "tags" => ['Sterrennacht boven de rhone', 'Het Bed', 'de Gedachte']
        ],
        5 => [
            "info" => "Petit Palais is een museum in Parijs, Frankrijk. Het museum...",
            "tags" => ['Woman wearing gloves', 'the nativity', 'Cascade Pendant']
        ],
        6 => [
            "info" => "Het Rijksmuseum in Amsterdam is een van de zestien rijksmusea in Nederland...",
            "tags" => ['De Nachtwacht', 'meisje met Parel', 'Het melkmeisje']
        ],
    ];

    return $tags[$id];
}