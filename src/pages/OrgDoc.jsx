import HTMLFlipBook from "react-pageflip";

export function OrgDoc() {
    return (
        <section className="org-doc">
            <h3>View Original Doctorate</h3>
            <section className="book">
                <HTMLFlipBook width={300} height={500} showCover={true} >
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131223/HerzogDoctorate/0427100088_fcfmrq.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131230/HerzogDoctorate/0427100089_bwlpfo.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131222/HerzogDoctorate/0427100090_cvyd2m.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131228/HerzogDoctorate/0427100091_s5amzg.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131224/HerzogDoctorate/0427100092_y0jqz9.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131233/HerzogDoctorate/0427100093_o4vc59.jpg" alt="" />
                    <img src="https://res.cloudinary.com/dqidhqkor/image/upload/v1709131225/HerzogDoctorate/0427100094_ngfjxq.jpg" alt="" />
                </HTMLFlipBook>
            </section>
        </section>
    )
}