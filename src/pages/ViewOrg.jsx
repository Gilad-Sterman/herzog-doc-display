import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { getOriginalImg } from "../services/info.service";

export function ViewOrg() {

    const params = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [selected, setSelected] = useState(0)
    const [currImg, setCurrImg] = useState()
    const [nextImg, setNextImg] = useState()
    const [prevImg, setPrevImg] = useState()
    const [flipping, setFlipping] = useState(false);


    useEffect(() => {
        loadPage()
    }, [selected])

    function prev() {
        if (selected > 0) {
            setFlipping('prev');
            const page = selected > 1 ? selected - 2 : 0
            setSelected(page)
            setTimeout(() => {
                setFlipping(null)
            }, 1000)
        }
    }

    function next(first) {
        setFlipping('next')
        const page = first ? selected + 1 : selected + 2
        setSelected(page)
        setTimeout(() => {
            setFlipping(null)
        }, 1000); // Match this duration with the CSS animation duration
    }

    async function loadPage() {
        try {
            const currPage = await getOriginalImg(selected)
            const nextPage = await getOriginalImg(selected + 1)
            setCurrImg(currPage)
            setNextImg(nextPage)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <section className='view-org'>
            <h3>View Original Doctorate</h3>
            <section className={`book ${selected === 1 ? 'closed' : ''}`}>
                {selected <= 0 && (
                    <section className="first page">
                        <img src={currImg || "https://res.cloudinary.com/dqidhqkor/image/upload/v1709131223/HerzogDoctorate/0427100088_fcfmrq.jpg"} alt="" />
                    </section>
                )}
                {selected >= 1 && (
                    <section className={`left page ${flipping === 'prev' ? 'flipping-prev' : ''}`} onClick={() => prev()}>
                        <img src={currImg} alt="" />
                    </section>
                )}
                {selected >= 1 &&
                    <section className={`left page place-holder`} onClick={() => prev()}>
                        <img src={currImg} alt="" />
                    </section>
                }
                {selected >= 1 && (
                    <section className={`right page ${flipping === 'next' ? 'flipping-next' : ''}`} onClick={() => next()}>
                        <img src={nextImg} alt="" />
                    </section>
                )}
                {selected >= 1 &&
                    <section className={`right page place-holder`} onClick={() => next()}>
                        <img src={nextImg} alt="" />
                    </section>
                }
            </section>
            {selected <= 0 && <button className="btn next" onClick={() => next(true)}>
                <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508376/icons/forward_ohmney_1_zvpodk.svg" alt="" />
            </button>}
            {selected >= 1 && <button className="btn prev" onClick={() => prev()}>
                <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508376/icons/forward_ohmney_1_zvpodk.svg" alt="" />
            </button>}
            {selected >= 1 && <button className="btn next" onClick={() => next()}>
                <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1710508376/icons/forward_ohmney_1_zvpodk.svg" alt="" />
            </button>}
        </section>
    )
}