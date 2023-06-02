import { App } from "vue";
/**
 * picker 为Taro自带组件,可以直接使用,用法见https://b2nil.github.io/taro-ui-vue3/docs/picker.html
 * AtIcon 主要为自定义Icon服务,详情:https://b2nil.github.io/taro-ui-vue3/docs/icon.html
 */
import {
    createUI,
    AtNoticebar,
    AtAvatar,
    // AtIcon,
    AtButton,
    // AtFab,
    AtBadge,
    AtTag,
    AtActionSheet,
    AtActionSheetItem,
    AtProgress,
    AtActivityIndicator,
    AtModal,
    AtModalHeader,
    AtModalContent,
    AtModalAction,
    AtToast,
    AtSwipeAction,
    AtMessage,
    AtForm,
    AtInput,
    AtInputNumber,
    AtRadio,
    AtCheckbox,
    // AtRate,
    AtSwitch,
    AtTextarea,
    AtSearchBar,
    AtSlider,
    // AtImagePicker,
    // AtRange,
    AtFlex,
    AtFlexItem,
    AtGrid,
    AtList,
    AtListItem,
    AtCard,
    AtFloatLayout,
    // AtAccordion,
    AtNavBar,
    AtTabBar,
    // AtTabs,
    // AtTabsPane,
    // AtSegmentedControl,
    // AtPagination,
    // AtDrawer,
    // AtIndexes,
    // AtCalendar,
    // AtVirtualScroll,
    // AtSkeleton,
} from 'taro-ui-vue3'

export function install(app: App<Element>) {
    app.use(createUI({
        AtNoticebar,
        AtAvatar,
        // AtIcon,
        AtBadge,
        AtButton,
        // AtFab,
        AtTag,
        AtActionSheet,
        AtActionSheetItem,
        AtActivityIndicator,
        AtModal,
        AtModalHeader,
        AtModalContent,
        AtModalAction,
        AtProgress,
        AtToast,
        AtSwipeAction,
        AtMessage,
        AtForm,
        AtInput,
        AtInputNumber,
        AtRadio,
        AtCheckbox,
        // AtRate,
        AtSwitch,
        AtTextarea,
        AtSearchBar,
        AtSlider,
        // AtImagePicker,
        // AtRange,
        AtFlex,
        AtFlexItem,
        AtGrid,
        AtList,
        AtListItem,
        AtCard,
        AtFloatLayout,
        // AtAccordion,
        AtNavBar,
        AtTabBar,
        // AtTabs,
        // AtTabsPane,
        // AtSegmentedControl,
        // AtPagination,
        // AtDrawer,
        // AtIndexes,
        // AtCalendar,
        // AtVirtualScroll,
        // AtSkeleton,
    }))
}

import "taro-ui-vue3/dist/style/components/noticebar.scss"
import "taro-ui-vue3/dist/style/components/avatar.scss"
import "taro-ui-vue3/dist/style/components/article.scss"
// import "taro-ui-vue3/dist/style/components/icon.scss"
import "taro-ui-vue3/dist/style/components/button.scss"
// import "taro-ui-vue3/dist/style/components/fab.scss"
import "taro-ui-vue3/dist/style/components/badge.scss"
import "taro-ui-vue3/dist/style/components/tag.scss"
import "taro-ui-vue3/dist/style/components/action-sheet.scss"
import "taro-ui-vue3/dist/style/components/activity-indicator.scss"
import "taro-ui-vue3/dist/style/components/modal.scss"
import "taro-ui-vue3/dist/style/components/progress.scss"
import "taro-ui-vue3/dist/style/components/toast.scss"
import "taro-ui-vue3/dist/style/components/swipe-action.scss"
import "taro-ui-vue3/dist/style/components/message.scss"
import "taro-ui-vue3/dist/style/components/form.scss"
import "taro-ui-vue3/dist/style/components/input.scss"
import "taro-ui-vue3/dist/style/components/input-number.scss"
import "taro-ui-vue3/dist/style/components/radio.scss"
import "taro-ui-vue3/dist/style/components/checkbox.scss"
// import "taro-ui-vue3/dist/style/components/rate.scss"
import "taro-ui-vue3/dist/style/components/switch.scss"
import "taro-ui-vue3/dist/style/components/textarea.scss"
import "taro-ui-vue3/dist/style/components/search-bar.scss"
import "taro-ui-vue3/dist/style/components/slider.scss"
// import "taro-ui-vue3/dist/style/components/image-picker.scss"
// import "taro-ui-vue3/dist/style/components/range.scss"
import "taro-ui-vue3/dist/style/components/flex.scss"
import "taro-ui-vue3/dist/style/components/grid.scss"
import "taro-ui-vue3/dist/style/components/list.scss"
import "taro-ui-vue3/dist/style/components/card.scss"
import "taro-ui-vue3/dist/style/components/float-layout.scss"
// import "taro-ui-vue3/dist/style/components/accordion.scss"
import "taro-ui-vue3/dist/style/components/nav-bar.scss"
import "taro-ui-vue3/dist/style/components/tab-bar.scss"
// import "taro-ui-vue3/dist/style/components/tabs.scss"
// import "taro-ui-vue3/dist/style/components/segmented-control.scss"
// import "taro-ui-vue3/dist/style/components/pagination.scss"
// import "taro-ui-vue3/dist/style/components/drawer.scss"
// import "taro-ui-vue3/dist/style/components/indexes.scss"
// import "taro-ui-vue3/dist/style/components/calendar.scss"
// import "taro-ui-vue3/dist/style/components/virtual-scroll.scss"
// import "taro-ui-vue3/dist/style/components/skeleton.scss"
