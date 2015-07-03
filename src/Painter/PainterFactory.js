import CandlePainter from './CandlePainter.js'
import XAxisPainter from './XAxisPainter.js'
import AreaPainter from './AreaPainter.js'
import LinePainter from './LinePainter.js'

var PainterFactory={
    CandlePainter:CandlePainter,
    XAxisPainter:XAxisPainter,
    AreaPainter:AreaPainter,
    LinePainter:LinePainter
}
export default PainterFactory;