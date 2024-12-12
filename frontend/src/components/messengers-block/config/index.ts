import { Facebook, Vk, Twitter, Instagram } from '@UI'

export const messengers = [
    {
        element: Facebook,
        props: {
            url: `http://www.facebook.com/sharer.php?u=${window.location.origin}&t=%D0%92%D1%8B%D0%B8%D0%B3%D1%80%D1%8B%D0%B2%D0%B0%D0%B9%20%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5!`
        }
    },
    {
        element: Vk,
        props: {
            url: `https://vk.com/share.php?url=${window.location.origin}&title=%D0%92%D1%8B%D0%B8%D0%B3%D1%80%D1%8B%D0%B2%D0%B0%D0%B9%20%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5!`
        }
    },
    {
        element: Twitter,
        props: {
            url: `http://twitter.com/share?url=${window.location.origin}&text=%D0%92%D1%8B%D0%B8%D0%B3%D1%80%D1%8B%D0%B2%D0%B0%D0%B9%20%D0%BF%D1%83%D1%82%D0%B5%D1%88%D0%B5%D1%81%D1%82%D0%B2%D0%B8%D0%B5!`
        }
    },
    {
        element: Instagram,
        props: {
            url: `https://www.instagram.com/?url=${window.location.origin}`
        }
    }
]