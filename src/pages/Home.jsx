import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPages } from "../services/info.service";
import HTMLFlipBook from "react-pageflip";


export const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <section className="content">
                <h1>{props.title}</h1>
                {props.text.map((t, idx) => {
                    if (t.type === 'title') {
                        return <h5 key={idx}>{t.txt.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            return st
                        })}</h5>
                    }
                    if (t.type === 'regular') {
                        return <p key={idx}>{t.txt.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            return st
                        })}</p>
                    }
                    if (t.type === 'hebrew') {
                        return <p key={idx} className="rtl">{t.txt.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            return st
                        })}</p>
                    }
                    if (t.type === 'img') return <img key={idx} className="inline-img" src={t.url} alt="" />
                    if (t.type === 'list') {
                        return <ul key={idx}>{t.txt.map((li, lidx) => <li key={lidx}>{`${lidx + 1}) `}{li.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            return st
                        })}</li>
                        )}</ul>
                    }
                    if (t.type === 'translation') return <div key={idx} className="trans">
                        <p key={'org'}>{t.txtOrg.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            if (st === 'n') return <br key={idx} />
                            return st
                        })}</p>
                        <p key={'trans'}>{t.txtTrans.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1]}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            if (st === 'n') return <br key={idx} />
                            return st
                        })}</p>
                    </div>
                    if (t.type === 'tripleTranslation') return <div key={idx} className="triple-trans">
                        <p key={'orgLang'}>{t.txtOrgLang.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            if (st === 'n') return <br key={idx} />
                            return st
                        })}</p>
                        <p key={'org'}>{t.txtOrg.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            if (st === 'n') return <br key={idx} />
                            return st
                        })}</p>
                        <p key={'trans'}>{t.txtTrans.split('<<').map((st, sidx) => {
                            if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                    if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                    if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                    if (st === 'n') return <br key={nidx} />
                                    return st
                                })}</span>
                            </span>
                            if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                            if (st === 'n') return <br key={idx} />
                            return st
                        })}</p>
                    </div>
                    if (t.type === 'translationList') return <div key={idx} className="trans">
                        <div key={'org'}> <ul>{t.txtOrg.map((li, lidx) => <li key={lidx}>
                            {li.split('<<').map((st, sidx) => {
                                if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                    <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                    <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, sidx) => {
                                        if (st.split('#')[0] === 'l') return <a key={sidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                        if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                                        if (st === 'n') return <br key={idx} />
                                        return st
                                    })}</span>
                                </span>
                                if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                                if (st === 'n') return <br key={idx} />
                                return st
                            })}
                        </li>)}
                        </ul>
                        </div>
                        <div key={'trans'}> <ul>{t.txtTrans.map((li, lidx) =>
                            <li key={lidx}>{li.split('<<').map((st, sidx) => {
                                if (+st > 0) return <span key={sidx} className="foot-note" id={`footNote${st}`}>
                                    <span className="foot-note-num"><a href={`#foot-note${st - 1}`} onClick={() => scrollUp()}>{st}</a></span>
                                    <span className="foot-note-txt">{props.footNotes[st - 1].split('<<').map((st, nidx) => {
                                        if (st.split('#')[0] === 'l') return <a key={nidx} href={st.split('#')[1]}>{st.split('#')[1]}</a>
                                        if (st.split('#')[0] === 'i') return <span key={nidx} className="italic">{st.split('#')[1]}</span>
                                        if (st === 'n') return <br key={nidx} />
                                        return st
                                    })}</span>
                                </span>
                                if (st.split('#')[0] === 'i') return <span key={sidx} className="italic">{st.split('#')[1]}</span>
                                if (st === 'n') return <br />
                                return st
                            })}</li>
                        )}</ul>
                        </div>
                    </div>
                })}
                <p className="page-info">
                    <span>{props.number + 1}</span>
                    <span>{`Chapter ${props.chap}: ${props.title} ${props.subChap ? `, ${props.subChap}` : ''}`}</span>
                </p>
            </section>
        </div>
    )
})

export function Home() {
    const navigate = useNavigate()
    const [selected, setSelcted] = useState('')
    const [pages, setPages] = useState([])
    const [currPages, setCurrPages] = useState(0)



    useEffect(() => {
        loadPages()
    }, [])

    // async function loadImgs() {
    //     try {
    //         const res = await getOriginalPdfs()
    //         setPages(res)
    //     } catch (err) {
    //         console.log(err)

    //     }
    // }

    async function loadPages() {
        try {
            const res = await getPages()
            setPages(res)
        } catch (err) {
            console.log(err)

        }
    }

    const onFlip = useCallback((e) => {
        const currPage = e.data
        const pages = [currPage, currPage + 1]
        setCurrPages(pages)
    }, [])

    return (
        <section className='home'>
            <section className="book">
                <HTMLFlipBook width={400} height={550} showCover={true} onFlip={onFlip} >
                    <section className="cover">
                        <div className="content">
                            <h3>Semetic Porphyrology</h3>
                            <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709645199/HerzogStudyingCrop_tdd3py.jpg" alt="" />
                            <p>Rabbi Dr. Isaac Herzog</p>
                        </div>
                    </section>
                    {pages.map((page, idx) =>
                        <Page number={idx} key={idx} title={page.title} text={page.txt} footNotes={page.footNotes} chap={page.chap} subChap={page.subChap} />
                    )}
                </HTMLFlipBook>
            </section>
            <section className="explination">
                <p>Some words about this page: pages {currPages[0]}, {currPages[1]}</p>
            </section>
        </section>
    )
}
