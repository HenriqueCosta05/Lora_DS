import { Label, Slider, SliderOutput, SliderThumb, SliderTrack } from "react-aria-components";
import { BaseSliderProps } from "./Slider.interface";
import styles from "./Slider.module.css";

export const SliderComponent = <T extends number | number[]>(props: BaseSliderProps<T>) => {
    const { label, className, ...restProps } = props;

    const sliderClassNames = [
        styles.slider,
        className
    ].filter(Boolean).join(" ");

    return (
        <Slider {...restProps} className={sliderClassNames}>
            {label && <Label className={styles.label}>{label}</Label>}
            <SliderOutput className={styles.output} />
            <SliderTrack className={styles.track}>
                <div className={styles.fill} />
                <SliderThumb className={styles.thumb} />
            </SliderTrack>
        </Slider>
    );
};
