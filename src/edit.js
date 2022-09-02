import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	BlockControls,
	RichText,
	MediaUpload,
} from "@wordpress/block-editor";
import {
	Toolbar,
	ToolbarButton,
	Button,
	TextControl,
	SelectControl,
} from "@wordpress/components";
import { useState } from "@wordpress/element";
import "./editor.scss";

import { SaveSlideComponent, overlayStyle } from "./save";
import useEscKey from "./useEscKey";

export default function Edit(props) {
	const [editingSlide, setEditingSlide] = useState(null);
	useEscKey(() => setEditingSlide(null)); // to close the editing overlay with ESC

	function addSlide() {
		const oldSlides = props.attributes.slides
			? [...props.attributes.slides]
			: [];
		oldSlides.push({
			bgImageUrl: null,
			bgImageID: null,
			badge: "Politics",
			title: props.attributes.slides.length + " El perro de San Roque",
			linkUrl: "#",
			linkText: "Read more",
			linkTarget: "_blank",
		});

		props.setAttributes({
			slides: oldSlides,
		});
		setEditingSlide(oldSlides.length - 1);
	}
	function updateSlideField(slideIndex, field, value) {
		const slideAttrs = { ...props.attributes.slides[slideIndex] };
		slideAttrs[field] = value;
		const newSlides = props.attributes.slides.map((sl, i) =>
			i === slideIndex ? slideAttrs : sl
		);
		props.setAttributes({ slides: newSlides });
	}
	function moveSlide(sourceIndex, targetIndex) {
		if (
			sourceIndex < 0 ||
			sourceIndex >= props.attributes.slides.length ||
			targetIndex < 0 ||
			targetIndex >= props.attributes.slides.length
		)
			return;
		const slidesOriginal = [...props.attributes.slides];
		slidesOriginal.splice(
			targetIndex,
			0,
			slidesOriginal.splice(sourceIndex, 1)[0]
		);
		props.setAttributes({ slides: slidesOriginal });
		if (editingSlide === sourceIndex) setEditingSlide(targetIndex);
	}
	function deleteSlide(indexSlide) {
		if (indexSlide < 0 || indexSlide >= props.attributes.slides.length) return;
		const newSlides = [...props.attributes.slides]; // 2nd parameter means remove one item only
		newSlides.splice(indexSlide, 1);
		props.setAttributes({ slides: newSlides });
		setEditingSlide(null);
	}

	return (
		<>
			<BlockControls>
				<Toolbar label="Options">
					<ToolbarButton
						icon={"arrow-left-alt2"}
						isDisabled={editingSlide === 0 || editingSlide === null}
						label="move left"
						onClick={() => moveSlide(editingSlide, editingSlide - 1)}
					/>
					<ToolbarButton
						icon={"arrow-right-alt2"}
						isDisabled={
							editingSlide === null ||
							editingSlide >= props.attributes.slides.length
						}
						label="move right"
						onClick={() => moveSlide(editingSlide, editingSlide + 1)}
					/>
					<ToolbarButton icon={"plus"} label="Add Slide" onClick={addSlide} />
					{editingSlide !== null && (
						<ToolbarButton
							icon={"trash"}
							label="delete"
							onClick={() => deleteSlide(editingSlide)}
						/>
					)}
				</Toolbar>
			</BlockControls>
			<div {...useBlockProps()}>
				<ul>
					{props.attributes.slides?.map((slide, indexSlide) => {
						return indexSlide === editingSlide ? (
							<EditSlideComponent
								attrs={slide}
								allSlides={props.attributes.slides}
								indexSlide={indexSlide}
								setEditingSlide={setEditingSlide}
								updateSlideField={updateSlideField}
								setAttributes={props.setAttributes}
							/>
						) : (
							<SaveSlideComponent
								attrs={slide}
								indexSlide={indexSlide}
								onClick={(e) => setEditingSlide(indexSlide)}
								extraClasses="wp-block-coco-blocks-simple-slider__slide--noneditableslidewrapper"
							/>
						);
					})}
				</ul>
			</div>
		</>
	);
}

function EditSlideComponent({
	attrs,
	indexSlide,
	allSlides,
	setEditingSlide,
	updateSlideField,
	setAttributes,
}) {
	// console.log(
	// 	"%ctodelete EditSlide render. Attrs",
	// 	"font-size:1.2rem;color:orange;",
	// 	attrs
	// );

	return (
		<li
			className="wp-block-coco-blocks-simple-slider__slide selected"
			style={{
				backgroundImage:
					overlayStyle +
					(attrs.bgImageUrl ? `, url(${attrs.bgImageUrl}) ` : ""),
			}}
		>
			<div className="wp-block-coco-blocks-simple-slider__clickablewrapper">
				{/* Show current bg image, and button to add/replace */}
				<MediaUpload
					onSelect={(media) => {
						//  console.log("toelete", media);
						const newAttrs = { ...attrs };
						newAttrs.bgImageUrl = media.sizes.medium.url;
						newAttrs.bgImageID = media.id;
						const newSlides = allSlides.map((sl, i) =>
							i === indexSlide ? newAttrs : sl
						);
						setAttributes({ slides: newSlides });
					}}
					multiple={false}
					render={({ open }) => (
						<>
							<button onClick={open} className="upload-btn">
								{attrs.bgImageUrl === null ? "Upload" : "Replace bg image"}
							</button>
							{!attrs.bgImageUrl ? null : null}
						</>
					)}
				/>

				{/* Show Badge Editing */}
				<RichText
					tagName="span"
					className="wp-block-coco-blocks-simple-slider__badge"
					value={attrs.badge}
					onChange={(newVal) => updateSlideField(indexSlide, "badge", newVal)}
					placeholder="Subheading Goes Here"
				/>
				{/* Show Title Editing */}
				<RichText
					tagName="h3"
					className="wp-block-coco-blocks-simple-slider__title"
					value={attrs.title}
					onChange={(newVal) => updateSlideField(indexSlide, "title", newVal)}
					placeholder="Category badge"
				/>
				{/* Show Link Text Editing */}
				<div className="wp-block-coco-blocks-simple-slider__linkwrapper">
					<RichText
						tagName="span"
						className="gb-button gb-button-text wp-block-coco-blocks-simple-slider__button"
						placeholder="Click me..."
						value={attrs.linkText}
						onChange={(newVal) =>
							updateSlideField(indexSlide, "linkText", newVal)
						}
					/>
					<div className="wp-block-coco-blocks-simple-slider__linkoneline">
						<TextControl
							label="Url"
							className="wp-block-coco-blocks-simple-slider__linkurl"
							placeholder="https://..."
							value={attrs.linkUrl}
							onChange={(newVal) =>
								updateSlideField(indexSlide, "linkUrl", newVal)
							}
						/>
						<SelectControl
							label="target"
							className="wp-block-coco-blocks-simple-slider__linktarget"
							value={attrs.linkTarget}
							options={[
								{ label: "_blank", value: "blank" },
								{ label: "_self", value: "_self" },
								{ label: "_parent", value: "_parent" },
								{ label: "_top", value: "_top" },
							]}
							onChange={(newVal) =>
								updateSlideField(indexSlide, "linkTarget", newVal)
							}
						/>
					</div>
				</div>
			</div>
			<Button
				variant="secondary"
				onClick={(e) => setEditingSlide(null)}
				className="save-btn"
			>
				Save
			</Button>
		</li>
	);
}
