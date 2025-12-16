import { ModalOverlay, Modal, Dialog, Heading } from "react-aria-components";
import { BaseModalProps, BaseDialogProps } from "./Modal.interface";
import styles from "./Modal.module.css";

export const ModalComponent = (props: BaseModalProps) => {
    const { children, className, ...restProps } = props;

    const modalClassNames = [
        styles.overlay,
        className
    ].filter(Boolean).join(" ");

    return (
        <ModalOverlay {...restProps} className={modalClassNames}>
            <Modal className={styles.modal}>
                {children}
            </Modal>
        </ModalOverlay>
    );
};

export const DialogComponent = (props: BaseDialogProps) => {
    const { title, children, className, ...restProps } = props;

    const dialogClassNames = [
        styles.dialog,
        className
    ].filter(Boolean).join(" ");

    return (
        <Dialog {...restProps} className={dialogClassNames}>
            {({ close }) => (
                <>
                    {title && (
                        <div className={styles.header}>
                            <Heading slot="title" className={styles.title}>{title}</Heading>
                            <button className={styles.closeButton} onClick={close} aria-label="Close">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    )}
                    <div className={styles.content}>
                        {children}
                    </div>
                </>
            )}
        </Dialog>
    );
};
