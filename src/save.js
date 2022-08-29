import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	console.log("%cSAVE", "font-size:1.2rem;color:pink;", props);
	return (
		<div
			{...useBlockProps.save({ className: "splide simple-slider-frontend" })}
		>
			<div className="splide__track">
				<ul className="splide__list">
					{props.attributes.slides?.map((slide, indexSlide) => {
						return (
							<SaveSlideComponent
								attrs={slide}
								indexSlide={-1}
								extraClasses="splide__slide"
							/>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

/** This is shown in the frontend. And SAVED in the code of the backend (but not shown as UI in the backend, eh?) */
export const overlayStyle = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.6))`; // helper
export function SaveSlideComponent({
	attrs,
	indexSlide,
	extraClasses = "",
	onClick = (e) => false,
}) {
	const isFrontend = indexSlide === -1;
	return (
		<li
			className={`wp-block-coco-blocks-simple-slider__slide ${extraClasses}`}
			onClick={onClick} // we use it for the backend
			style={{
				backgroundImage:
					overlayStyle +
					(attrs.bgImageUrl ? `, url(${attrs.bgImageUrl}) ` : ""),
			}}
		>
			{/* This container is only to store the data, we actually hide it just in case */}
			<div
				className="div-data-overlay"
				data-bgimageurl={attrs.bgImageUrl ?? "https://via.placeholder.com/150"}
				data-bgimageid={attrs.bgImageID ?? 0}
			></div>
			<a
				href={isFrontend ? attrs.linkUrl : "#"}
				target={isFrontend ? attrs.linkTarget : "_self"}
				onClick={(e) => e.preventDefault()} // this executes only in backend.
				rel="noopener noreferrer"
				className="wp-block-coco-blocks-simple-slider__clickablewrapper"
			>
				<RichText.Content
					tagName="span"
					value={attrs.badge}
					className="wp-block-coco-blocks-simple-slider__badge"
				/>
				<RichText.Content
					tagName="h3"
					value={attrs.title}
					className="wp-block-coco-blocks-simple-slider__title"
				/>

				<button
					href={attrs.linkUrl}
					onClick={(e) => (window.location = slide.linkUrl)}
					target={attrs.linkTarget}
					className="wp-block-coco-blocks-simple-slider__button"
				>
					{attrs.linkText}
				</button>
			</a>
		</li>
	);
}
