// Stories in CSF 2.0 format

import { Meta, StoryObj } from "@storybook/react";

import PostBody from "./PostBody";

export default {
  title: "model/posts/components/PostBody",
  component: PostBody,
} as Meta<typeof PostBody>;

type Story = StoryObj<typeof PostBody>;

export const Default: Story = {
  args: {
    content: `# Hello there

## Custom features

<collapse label="Tutkittua faktaa taloudesta" content="Kaliforniassa San Franciscon Valencia Streetillä jalkakäytävien leventäminen nosti liikevaihtoa 40 prosentilla kadun yrittäjistä ja 2/3 yrityksistä piti muutoksia positiivisina. Kalifornian Lodissa viidellä kadulla julkis-yksityisenä hankkeena toteutetut kävelyalueiden parannukset toivat keskustaan 60 uutta yritystä ja kasvattivat keskustan yritysten myynnin tuottamia verotuloja 30 prosenttia.\nFloridan West Palm Beachin maineeltaan huonossa keskustassa tehdyt uudistukset kasvattivat kiinteistöjen käyttöastetta 20 prosentista 80 prosenttiin ja nostivat liiketilojen neliövuokrat 6,7-kertaisiksi. Irlannin Dublinissa investoinnit rapistuneeseen Temple Barin alueeseen lisäsi ravintoloiden määrää 50 prosenttia, vähittäiskauppojen määrää 100 prosenttia, hotellien määrää 50 prosenttia ja asukkaiden määrää 300 prosenttia. \nViidessä ruotsalaisessa kaupungissa tehdyt parannukset keskustan viihtyisyyteen lisäsivät vähittäiskaupan liikevaihtoa 5–9 prosenttia, vuokratason nostopotentiaalia 84 prosenttia, alueen houkuttelevuusastetta 13 prosenttia, kun vertailukaupungeissa muutoksia ei tapahtunut.\nBangkokissa osa-aikainen kävelykatu nosti liikevaihtoa 44 prosentilla vastaajista. Hong Kongissa kävelykaduksi muuttaminen nosti vähittäiskaupan vuokratasoa 17 prosenttia. Sheffieldissä tehdyt kaupunkiympäristön ja kävelyalueiden parantamistoimet nostivat hotellihuoneiden määrää 120 prosenttia, asiakasmäärää keskustassa 9 prosenttia, toimistojen vuokria 30 prosenttia, kahviloiden ja ravintoloiden vuokratasoa 40–100 prosenttia sekä lisäsi keskustaan suuntautuvia ostosmatkoja 35 prosenttia ja vapaa-ajanmatkoja 45 prosenttia. Kolumbiassa Zona Rosan muuttaminen kävelykaduksi nosti kiinteistöjen arvoa 22 prosenttia, kun muualla kasvua oli samanaikaisesti vain 6 prosenttia. Kirjallisuuskatsaus (ks. Rantala 2014:116) eri maiden kaupungeissa kävelyolojen kehittämiseen tehtyjen ratkaisujen vaikutuksista puolestaan osoitti asiakasmäärien kasvaneen 20–40 prosenttia, liikevaihdon 10–25 prosenttia, vähittäiskaupan vuokratason 10–30 prosenttia ja toimistotilojen vuokratason 15–35 prosenttia. Yhdysvalloissa ja Britanniassa laadukkaiden kävelyolosuhteiden ja puistojen on havaittu nostavan asuntojen arvoa.\nSuomessa Santasalo ja Heusala (2002) ovat havainneet, että kävelykaduilla neliövuokrat ja -myynti ovat mediaanivuokraa ja -myyntiä 15 prosenttia ja 23 prosenttia korkeammat.\nWhitehead et. al (2006) ovat havainneet, että kaupunkiympäristöjen parannustoimet, kuten kävelyalueiden laajentaminen, voivat lisätä taloudellista aktiivisuutta. Vaikutuksia on Manchesterissä ollut liiketilojen vuokratasoon (kasvua 21,7–24,2 prosenttia), vähittäiskaupan liikevaihtoon (kasvua 10–25 prosenttia) sekä asiakasmääriin (kasvua 32 prosenttia).\nSevillan keskusta-alueen ulkopuolelle perustetuilla kävelyalueilla sijaitsevat yritykset ovat hyötyneet asioinnin lisääntymisestä ja siirtymästä kävelyalueelle (Castillo-Manzano et. al. 2014). Asiointien siirtymä voi luoda painetta laajentaa kävelyalueita myös muilla kaduilla.\nUnion Square Northilla, Manhattanilla jalankulkualueen laajentamisen on havaittu vähentäneen selvästi tyhjien liiketilojen määrää (49 prosenttia vähemmän), kun samanaikaisesti tyhjien liiketilojen määrän vähentyminen on muualla kaupunginosassa ollut verrattain vähäistä (5 prosenttia vähemmän). Muutokseen tyytyväisiä oli 74 prosenttia alueen käyttäjistä. Pearl Streetillä, Brooklynissa alihyödynnetyn pysäköintialueen muuttaminen oleskelualueeksi lisäsi paikallisten yritysten myyntiä peräti 174 prosenttia - 29 verrattuna 18 prosentin kasvulukuihin kaupunginosan tasolla. Samalla kadulla ajoväylän reunaan tehty istuskelualue lisäsi 77 prosentilla istuvien jalankulkijoiden määrää ja 14 prosenttia yritysten myyntiä. (Measuring the street…2012).\nSadik-Khanin ja Solomonowin (2016) mukaan Aucklandissa jalankulun edistämishanke lisäsi kävelyä kaupungin keskustassa 140 prosenttia ja eräällä kadulla yritysten myyntiä peräti 430 prosenttia.\nMoosajee (2009) on havainnut, että Kapkaupungissa toteutettu Greenmarket Square -kaupunkiaukion muuttaminen jalankulkualueeksi paransi ravintoloiden ja kahviloiden myyntiä; parannukset liittyivät palveluntarjoajien uusiin mahdollisuuksiin tarjota istuskelumahdollisuuksia jalkakäytävillä ja aukiolla: ihmisille mahdollisuuksia olla keskenään tekemisissä. Aukion epävirallinen kauppa ja myös puolet kaupoista kuitenkin kärsi muutoksista. Enemmistö aukion yrittäjistä joka tapauksessa piti muutosta hyvänä.\nLawlorin (2014:33,35) mukaan useista tapaustutkimuksista on havaittu, että hyvin suunnitellut parannukset julkisiin kaupunkitiloihin voivat lisätä jalankulkua ja kauppaa jopa kymmeniä prosentteja ja että investoinnit parempiin kävelyalueisiin voivat tuoda kilpailukykyistä tuottoa muihin liikennehankkeisiin nähden. Jopa pienillä ja väliaikaisilla muutoksilla, kuten parkleteilla, eli pysäköintiruutujen ottamisella muuhun käyttöön, on havaittu olevan vaikutuksia lähellä sijaitsevien yritysten myyntiin (Lawlor 2014:29). Kävelyalueiden parantamiseen liittyvät hankkeet myös luovat Lawlorin (2014:43,47) mukaan enemmän rakennusalan työpaikkoja kuin tiehankkeet sekä nostavat kiinteistöjen arvoja. Kävelyalueiden parannukset voivat myös lisätä matkailijamääriä (Lawlor 2014:40).\nNakamura (2010) on korostanut, että perustamalla laajempi, keskustan eri kohteita toisiinsa yhdistävä jalankulkualue, on suuremmat hyödyt jalankululle ja suuremmat positiiviset talousvaikutukset kuin yksittäisen kadun muuttamisella kävelykaduksi. Cubukcu (2013) on korostanut käveltävyyden tukevan paikallista taloutta kannustamalla tekemään ostokset naapurustossa.\nEdellä mainituissa tutkimuksissa havaitut kävelyalueiden parannusten synnyttämät positiiviset vaikutukset ovat kohteesta riippuen siis liittyneet kävelijä- ja asiakasmääriin, yritysten liikevaihtoon ja -voittoon, yritysten määrään ja yritystoiminnan tuottamiin verotuloihin sekä asuin- ja liikekiinteistöjen arvoon, käyttöasteisiin ja vuokratuottoihin.\nBrenac et al. (2014) nostavat esille, kuinka kävelyalueiden laajentamisstrategiat ovat osa kaupunkien markkinointistrategiaa kaupunkien välisessä kilpailussa: ne johtavat kaupungin strategisten sijaintien houkuttelevuuden lisääntymiseen ja arvonnousuun.\nSoni ja Soni (2016) ovat listanneet käveltävyyden edistämisen hyötyjä liittyen talouteen: yritysten asiakasmäärien, myynnin ja vuokrien kasvun, polttoaineen, rakennusmaan ja infrastruktuurikustannusten säästymisen, säästöt (liikenteen) vähentyneistä negatiivisista ulkoisvaikutuksista, parantuneen työllisyysasteen ja tulot julkisen liikenteen käyttäjiltä.\nHaasteet kävelykatujen rakentamisessa ja kävelyalueiden laajentamisessa liittyvät ennen kaikkea muutosvaiheeseen; rakennustyömaa aiheuttaa usein väliaikaisia haittoja kävelykadun varrella sijaitseville yrityksille. Asian on huomioinut esimerkiksi HassKlau (1993). Kansainvälisiä hyviä käytäntöjä näiden haittojen minimoimiseksi ei tiettävästi ole selvitetty.\nLitman (2018) on tunnistanut käveltävyydellä olevan lukuisia taloudellisia hyötyjä: säästöt (kuluttajalle) ajoneuvokuluissa, säästöt teiden ja pysäköintitilojen rakentamisessa ja ylläpidossa sekä näihin käytetyssä maapinta-alassa, säästöt alentuneesta onnettomuuksien määrästä, lisääntyneen liikunnan tuomista terveyshyödyistä, vähentyneistä ruuhkista ja liikenteen haitoista ympäristölle. Käveltävien ympäristöjen kautta lisääntyvän sosiaalisen koheesion myötä voi puolestaan syntyä erilaisia epäsuoria hyötyjä. Lisäksi Litman (emt.) korostaa käveltävyyden hyötyjä paikallisille yrityksille ja työllisyydelle, kiinteistöjen arvolle, uusien yritysten houkuttelulle ja tyhjillään olevien liiketilojen täyttymiselle. Bidwell (2012) on tehnyt yhteenvedon tutkimuksista, joissa on ilmaistu numeerisesti kävelyn ja pyöräilyn lisäämiseen kohdistuneiden toimenpiteiden taloudellisia hyötyjä. Eri tutkimuksista on kertynyt selvää näyttöä edellä mainittujen toimenpiteiden suorista ja epäsuorista taloudellisista hyödyistä. Infrastruktuuri-investoinneista on havaittu olevan enemmän hyötyä kuin käyttäytymismuutoksia tavoittelevista toimenpiteistä ilman infrastruktuuriratkaisuja. Tunnistetut hyödyt liittyvät mm. liikunnallisen aktiivisuuden lisääntymisen sekä ilmansaasteiden ja liikenneonnettomuuksien vähentymisen monipuolisiin positiivisiin terveysvaikutuksiin sekä vähentyneisiin sairaanhoitokuluihin, sairaspoissaoloihin ja säästyneisiin elinvuosiin, kasvihuonekaasupäästöjen vähentymiseen ja parantuneeseen kykyyn vastata ilmastonmuutokseen, polttoainekulujen vähentymiseen, liiketilavuokrien nousuun ja asuntojen arvonnousuun, lisääntyneeseen taloudelliseen aktiivisuuteen sekä infrastruktuurihankkeiden työllisyysvaikutuksiin.\nLeinberger ja Rodriquez (2016) ovat osoittaneet, että käveltävimmät ja urbaaneimmat yhdysvaltalaismetropolit ovat myös maan kaupungeista mitaten varakkaimpia (bkt/asukas) ja niissä on koulutetuin väestö. Floridan (2011) mukaan käveltävyys houkuttelee koulutettua väkeä, joten yhteys kaupungin käveltävyyden ja varakkuuden kautta voi tulla ainakin osin väestön koulutustason kautta. Kaupunki, jossa väestön koulutustaso on korkea, voi myös mahdollisesti suosia käveltäviä vaihtoehtoja kaupunkisuunnittelussa. Opezzo & Schwartz (2014) ovat kuitenkin myös havainneet, että kävely lisää luovaa ajattelua.\nKävelyn ja pyöräilyn valtakunnallinen strategia 2020:n (2011) mukaan ”Riittämättömän liikunnan on arvioitu lisäävän terveydenhoidon menoja (valtiotasolla) vuodessa 100–200 miljoonaa euroa. Lisäksi lisääntyneet poissaolot ja työn tuottavuuden lasku lisäävät välillisiä kustannuksia noin 400 miljoonaa euroa vuodessa”. Strategia toteaa myös, että ”Jalankulun ja pyöräilyn ehdoilla rakennettu yhdyskunta on tiivis ja rakentamiskustannuksiltaan edullinen.”"></collapse>

<maps-embed mapMode="streetview" fov="90" location="13.0827, 80.2707" heading="90" pitch="0"></maps-embed>

<maps-embed mapMode="place" q="Ritakatu 11"></maps-embed>

<maps-embed mapMode="directions" origin="Tampere" destination="Helsinki" mode="bicycling"></maps-embed>

<maps-embed mapMode="search" q="Restaurants in Tampere"></maps-embed>

<maps-embed mapMode="view" center="61.4984, 23.7609" maptype="satellite" zoom="18"></maps-embed>

<animated-tweet text="Polkupyöräilijöiden ohjaaminen autoliikenteen sekaan kuulostaa ideologisesti houkuttelevalta vaihtoehdolta,| mutta onneksi turvallisuus ja järjestys asetettiin tässä tapauksessa etusijalle." imgSrc=""></animated-tweet>

<question options="Aamulehti|Poliittinen Twitter" answerIndex="0" answerDesc="Tämäkin on Aamulehden pääkirjoituksesta." title="Aamulehden pääkirjoituksesta vai poliittiseta twitteristä?"></question>

<youtube videoid="JF6WVW5-CvY" caption="Hääpari ja kuljettaja / Video Lauri Nevanperä"></youtube>

<infocard label="Pihakansi">Pihakansi on taloyhtiön betonipiha, jonka alle on kaivettu autoluola. Parkkiruudun rakennuskustannus pihakannen alle on 50 000 €</infocard>

<bar value="12" label="Henkilöautoilun osuus Hämeenkadun kulkijoista kun autoilu oli sallittu"></bar>

<getnotified></getnotified>

<tweet id="1610671736806309889"></tweet>
 
## Basic features    
This is a test post body. It should render markdown content correctly.

## This is a subheading

### This is a subsubheading

This is a paragraph with some **bold** and *italic* text.

- This is a list
- With some items
- With links [#1](https://www.laurinevanpera.fi/posts/keskustojen-naivettyminen) [#2](https://www.laurinevanpera.fi/posts/yrittajat-ja-data) [#3](https://www.laurinevanpera.fi/posts/elinvoimaa-tampereen-keskustaan)

1. This is a numbered list
2. With some items

> This is a blockquote

[This is a link](https://example.com)

![This is an image](https://via.placeholder.com/600x300)

`,
  },
};
