import { httpService } from "./http.service"

const originalImgs = [
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131223/HerzogDoctorate/0427100088_fcfmrq.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131230/HerzogDoctorate/0427100089_bwlpfo.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131222/HerzogDoctorate/0427100090_cvyd2m.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131228/HerzogDoctorate/0427100091_s5amzg.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131224/HerzogDoctorate/0427100092_y0jqz9.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131233/HerzogDoctorate/0427100093_o4vc59.jpg",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131225/HerzogDoctorate/0427100094_ngfjxq.jpg"
]

const originalPdfs = [
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384474/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-1-1_jqmqch.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384475/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-2-1_iq8gnq.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384476/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-3-1_igkruz.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384477/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-4-1_fw7ive.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384479/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-5-1_sk8u3f.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384480/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-6-1_dwyovc.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384481/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-7-1_m7ucmm.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384472/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-8-1_cr3dhi.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384473/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-9-1_m9haye.png",
    "https://res.cloudinary.com/dqidhqkor/image/upload/v1723384473/HerzogDoctorate/EnglishImgs/FullDoctorate.docx-10-1_o5hoo7.png",
]

const pagesEng = [
    {
        title: 'THE TEKHELET HILLAZON',
        chap: '5',
        subChap: 'F',
        txt: [
            {
                txt: "At all events, the Murex trunculus has a strong claim upon our attention in this connection. As the principal centre of <<i#Tekhelet<< production as far as Jews are concerned is located by tradition in the territory of Zebulun which adjoined Sidon, the evidence in favour of Murex trunculus applies as much to the solution of the question with regard to Jewish as to Phoenician <<i#Tekhelet<< though I know of no distinct mention of <<i#Tekhelet<< in particular in connection with Phoenician industry.",
                type: "regular"
            },
            {
                txt: "The inquirer equipped with a knowledge of the experiments of Lacaze-Duthiers, of the discoveries of Wilde, deSaulcy, and Gaillardot and of the conclusions arrived at by Dr. Dedekind will go to the T almud only for a confirmation of the identification of the <<i#Tekhelet<<-species with Murex trunculus. But there is a surprise in store for him.",
                type: "regular"
            },
            {
                txt: "ת״ר חלזון זהו גופו דומה לים וברייתו<<1<< דומה לדג עולה אחד<<2<< לשבעים שנה ובדמו צובעין תכלת לפיכך דמיו יקרין<<3<<",
                type: "hebrew"
            },
            {
                txt: "“...This is the description of the hillazon:",
                type: "regular"
            },
            {
                txt: [
                    "its body (i.e. the colour of its body or shell) is like unto the sea;",
                    "its shape (or form) is like unto a fish, and",
                    "it comes up once in seventy years; and with its blood <<i#Tekhelet<< is dyed, wherefore it is very dear.”<<4<<"
                ],
                type: "list"
            }
        ],
        footNotes: [
            "Lewysohn wrongly renders “seine Entstehung” (op. cit., 1 c). In רש״י and רבנו גרשום and cf.נדה כ״ד ע״ב ",
            "Bochart wrongly renders: “unus solum in terram ascendit singulis sept, anni.” אחד often stands for אחת (“one”) in Tanaitic usage. Cf. Yalkut אחת.",
            "Riedel (l.c.) erroneously translates “deshalb ist sein Blut theur.”",
            "Menahot, 44a."
        ]
    },
    {
        title: 'THE TEKHELET HILLAZON',
        chap: '5',
        subChap: 'F',
        txt: [
            {
                "txt": "The baraitha is quoted with very slight variations in the Yalkut Shimoni:",
                "type": "regular"
            },
            {
                "txt": "תנו רבנו חלזון זו גופו דומה לים וכו׳ עולה אחת לשבעים שנה",
                "type": "hebrew"
            },
            {
                "txt": "The reading זו would seem to treat חלזון as of feminine gender though it is masculine throughout the rest of the passage as well as in all other texts when חלזון occurs.",
                "type": "regular"
            },
            {
                "txt": "It would seem that the original reading of the Yalkut was זהו. A copyist wishing to correct it after the reading of the Talmud placed a ו over the ה. Another scribe taking the ו as a correction of the ה wrote זו. In any case the reading would bear its justification within itself; the noun <<i#hillazon<< comprising all kinds of shell snails. זה (zeh) (this species of <<i#hillazon<<) would be the proper word rather than זהו (zehu) (this <<i#hillazon<< this is its description) which might lead to the misunderstanding of the passage as applying to <<i#hillazon<< in general, and so turn the Talmudic description into a source of error for the ignorant and of amazement for the better informed. Yet the reading זהו may be original. The passage is doubtless an extract from a context dealing with <<i#Tekhelet<< and <<i#hillazon-shel-Tekhelet<< where of course there would be no room for mistake. In the Talmud also the description appears in close proximity to passages dealing with the <<i#hillazon-shel-Tekhelet<<. I would add, however, that the reading זה (zeh) has the support of no less an authority than Samuel b. Hofni (See my edition of the 9th chapter of his כתאב אחכאם שרע אל ציצית in the July number of the Jewish Quarterly Review 1914).",
                "type": "regular"
            }
        ],
        footNotes: [
            "Lewysohn wrongly renders “seine Entstehung” (op. cit., 1 c). In רש״י and רבנו גרשום and cf.נדה כ״ד ע״ב ",
            "Bochart wrongly renders: “unus solum in terram ascendit singulis sept, anni.” אחד often stands for אחת (“one”) in Tanaitic usage. Cf. Yalkut אחת.",
            "Riedel (l.c.) erroneously translates “deshalb ist sein Blut theur.”",
            "Menahot, 44a."
        ]
    },
    {
        title: 'TEKHELET AS A COLOUR DESIGNATION',
        chap: '6',
        subChap: 'C',
        txt: [
            {
                "txt": "Iakinthos as the Traditional Rendering of Tekhelet",
                "type": "title"
            },
            {
                "txt": "Thus a chain of tradition extending from the LXX (not later than 250 B.C.) to Aquilas (about 100 C.E. ) attests the equivalence of Iakinthos for Tekhelet in the language of the Greek-speaking Jews. The testimony of Aquilas is of especial significance in view of the fact that his translation far from being based upon the LXX was in reality the outcome of an anti-Septuagint movement inspired by the highest representatives of tradition.",
                "type": "regular"
            },
            {
                "txt": "Iakinthos as the Name of a Certain Colored Fabric",
                "type": "title"
            },
            {
                "txt": "<<i#Iakinthos<< as the name of a coloured fabric is rarely met with in Greek literature. Homer only refers to the flower called",
                "type": "regular"
            },
            {
                "txtOrgLang": "υάκινθος: ουλας ηκε κομας, ύακινθίνω ανθει ομοιασ.",
                "txtOrg": "Yakinthos: oulas ike komas, ýakinthíno anthei omoias.",
                "txtTrans": "Hyacinth: she [Athene] made the locks flow in curls like the hyacinth flower. <<1<<",
                "type": "tripleTranslation"
            }
        ],
        footNotes: [
            "<<l#https://www.loebclassics.com/view/homer-odyssey/1919/pb_LCL105.395.xml<<",
            "However, in Arrian’s description of Cyrus’ tomb at Psargadae: “Én de tou ékeinto ai dé oikumati… kai stolai Jakinthobareis legei oti ékeito, ai dé Porphyras ai dé alius chroas kte.” () These statements are made upon the authority of Aristobulos, a constant attendant of Alexander the Great. The use of “iakinthos” as the designation of a certain coloured fabric is thus traceable to about the end of the 4th century B.C.",
            "Pliny, Hist. Nat., XXXVII, ch. 9. For an exact reproduction of the nuance see: Mely, F. d., “Pierres Precieusesin: Vigoreux, Fulcran, Diet, de la Bible, Paris (1912).",
            "Ambrosius, <<i#Apologia<<, Bk. XXI, ch. 30.",
            "Solinus, Cains Julius, <<i#Collectanea rerum<<. Ed. Mommsen, Berlin (1864), p. 152.",
            "Hieronymus, Cf. Michael Psillus: “<<i#Iakinthos<< … esti blattys Porphyos elainys to eidos. Mely, <<i#ibid<<.",
            "Epiphanius, “De Gemmis,” Bk. XII, ch. VI. Mely, <<i#ibid<<. The text is corrected by de Mely.",
            "Bluemner, <<i#ibid<<.",
            "Mely, “Hyacinth,” Vigoreux, <<i#ibid<<.",
            "The literal translation of this word is “kingly” or “royal”, but it can also refer to the origin of the stone. There are at least two attestations of “βασιλικός” meaning “from Persia” (Amphis 27.3, Dsc.1.125) and at least one meaning “from Ethiopia” (Dsc.3.62).",
            "The hyacinth of the Midrashists is however not to be identified with <<i#lapis lazuli<<. Compare Midrash Rabbah Exodus, section 38. with <<i#ib<<. Musbara, section 2.",
            "Hieronymus died in 420.",
            "Delitzsch, Franz, <<i#Iris<<, p. 63.",
            "See: P. de Mely, “Hyacinth,” in Vigoureux, <<i#Diet, de la Bible<<, and idem, <<i#Lapidaire Grec<<, Paris ( 1897), p. 196.",
            "Mely, “Hyacinth,” Vigoreux, <<i#ibid<<. - Mely, <<i#Sapidaire<<, p. 196.",
            "Theocritus, <<i#The Idyll<<, Oxford (1866), Bk. X, ch. 28.",
            "Philostrates, <<i#Epistolae<<, epistle III.",
            "<<i#Eneyel. Brit<<. 11th ed., “Hyacinth”.",
            "Bergel, Joseph, <<i#Studien<<, Leipzig (1880), p. 49.",
            "Hartmann, Anton, <<i#Die Hebraenm beim Putztische<<, Amsterdam ( 1809-10), V. I, p. 574; v.II, p. 128.",
            "Baehr, <<i#ibid<<.",
            "Bouillet, Jean Baptiste, “Poule,” <<i#Diet, de Sciences<<."
        ]
    },
    {
        title: 'TEKHELET AS A COLOUR DESIGNATION',
        chap: '6',
        subChap: 'C',
        txt: [
            {
                "txt": "Xenophon, so far as I have been able to trace, contains the earliest known allusion to <<i#Iakinthos<< as a color designation; “Loron Iakinthibary,” 6.4. The LXX would seem to be the oldest extant witness for the use <<i#Iakinthos<< as a term designating a certain coloured fabric.<<2<<",
                "type": "regular"
            },
            {
                "txt": "The translators of the Pentateuch must have found <<i#Iakinthos<< already in current usage as the Greek name for the fabric called <<i#Tekhelet<< in Hebrew.",
                "type": "regular"
            },
            {
                "txt": "Iakinthos as the Name of a Certain Stone",
                "type": "title"
            },
            {
                "txt": "It is by no means easy to ascertain the precise meaning of <<i#“Iakinthos”<< as a colour designation. The word occurs:",
                "type": "regular"
            },
            {
                "txt": [
                    " – as the name of the flower;",
                    " – as that of a precious stone."
                ],
                "type": "list"
            },
            {
                "txt": "There seems to have been a variety of gems known by that name. In Pliny’s terminology the word seems to designate a violet-coloured precious stone closely akin to the pure violet stone, amethyst, still known by that name<<3<< but paler in shade than the latter.",
                "type": "regular"
            }
        ],
        footNotes: [
            "<<l#https://www.loebclassics.com/view/homer-odyssey/1919/pb_LCL105.395.xml<<",
            "However, in Arrian’s description of Cyrus’ tomb at Psargadae: “Én de tou ékeinto ai dé oikumati… kai stolai Jakinthobareis legei oti ékeito, ai dé Porphyras ai dé alius chroas kte.” () These statements are made upon the authority of Aristobulos, a constant attendant of Alexander the Great. The use of “iakinthos” as the designation of a certain coloured fabric is thus traceable to about the end of the 4th century B.C.",
            "Pliny, Hist. Nat., XXXVII, ch. 9. For an exact reproduction of the nuance see: Mely, F. d., “Pierres Precieusesin: Vigoreux, Fulcran, Diet, de la Bible, Paris (1912).",
            "Ambrosius, <<i#Apologia<<, Bk. XXI, ch. 30.",
            "Solinus, Cains Julius, <<i#Collectanea rerum<<. Ed. Mommsen, Berlin (1864), p. 152.",
            "Hieronymus, Cf. Michael Psillus: “<<i#Iakinthos<< … esti blattys Porphyos elainys to eidos. Mely, <<i#ibid<<.",
            "Epiphanius, “De Gemmis,” Bk. XII, ch. VI. Mely, <<i#ibid<<. The text is corrected by de Mely.",
            "Bluemner, <<i#ibid<<.",
            "Mely, “Hyacinth,” Vigoreux, <<i#ibid<<.",
            "The literal translation of this word is “kingly” or “royal”, but it can also refer to the origin of the stone. There are at least two attestations of “βασιλικός” meaning “from Persia” (Amphis 27.3, Dsc.1.125) and at least one meaning “from Ethiopia” (Dsc.3.62).",
            "The hyacinth of the Midrashists is however not to be identified with <<i#lapis lazuli<<. Compare Midrash Rabbah Exodus, section 38. with <<i#ib<<. Musbara, section 2.",
            "Hieronymus died in 420.",
            "Delitzsch, Franz, <<i#Iris<<, p. 63.",
            "See: P. de Mely, “Hyacinth,” in Vigoureux, <<i#Diet, de la Bible<<, and idem, <<i#Lapidaire Grec<<, Paris ( 1897), p. 196.",
            "Mely, “Hyacinth,” Vigoreux, <<i#ibid<<. - Mely, <<i#Sapidaire<<, p. 196.",
            "Theocritus, <<i#The Idyll<<, Oxford (1866), Bk. X, ch. 28.",
            "Philostrates, <<i#Epistolae<<, epistle III.",
            "<<i#Eneyel. Brit<<. 11th ed., “Hyacinth”.",
            "Bergel, Joseph, <<i#Studien<<, Leipzig (1880), p. 49.",
            "Hartmann, Anton, <<i#Die Hebraenm beim Putztische<<, Amsterdam ( 1809-10), V. I, p. 574; v.II, p. 128.",
            "Baehr, <<i#ibid<<.",
            "Bouillet, Jean Baptiste, “Poule,” <<i#Diet, de Sciences<<."
        ]
    },
]

const STORAGE_KEY = 'org-imgs'

export async function getOriginalImg(num) {
    return new Promise(resolve => setTimeout(() => resolve(originalImgs[num]), 0))
    try {
        const res = await httpService.get(`${STORAGE_KEY}/${num}`)
        return res
    } catch (err) {
        console.log(err)
        throw err
    }
}

export async function getOriginalPdfs() {
    return new Promise(resolve => setTimeout(() => resolve(originalPdfs), 0))
}

export async function getPages() {
    return new Promise(resolve => setTimeout(() => resolve(pagesEng), 0))
}
