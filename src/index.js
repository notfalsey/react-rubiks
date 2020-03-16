import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const COLOR_WHITE = 0;
const COLOR_YELLOW = 1;
const COLOR_RED = 2;
const COLOR_BLUE = 3;
const COLOR_GREEN = 4;
const COLOR_ORANGE = 5;

const DIRECTION_UP = 0;
const DIRECTION_DOWN = 1;
const DIRECTION_RIGHT = 2;
const DIRECTION_LEFT = 3;

const colorMappings = {
  [COLOR_WHITE]: "white",
  [COLOR_YELLOW]: "yellow",
  [COLOR_RED]: "red",
  [COLOR_BLUE]: "blue",
  [COLOR_GREEN]: "green",
  [COLOR_ORANGE]: "orange"
};

function TopSquare(props) {
  return (
    <polygon
      points={`${props.x},${props.y} ${props.x - props.width},${props.y -
        props.width} ${props.x},${props.y - 2 * props.width} ${props.x +
        props.width},${props.y - props.width}`}
      fill={props.color}
      stroke="black"
    />
  );
}

function TopColumn(props) {
  return (
    <g>
      <TopSquare
        x={props.topLeftX}
        y={props.topLeftY}
        width={props.width}
        color={colorMappings[props.topColor]}
      />
      <TopSquare
        x={props.topLeftX - props.width}
        y={props.topLeftY + props.width}
        width={props.width}
        color={colorMappings[props.middleColor]}
      />
      <TopSquare
        x={props.topLeftX - 2 * props.width}
        y={props.topLeftY + 2 * props.width}
        width={props.width}
        color={colorMappings[props.bottomColor]}
      />
    </g>
  );
}

function TopSide(props) {
  return (
    <g>
      {/* left-most column */}
      <TopColumn
        topLeftX={props.centerX}
        topLeftY={props.centerY - 4 * props.width}
        width={props.width}
        topColor={props.squares[2][2]}
        middleColor={props.squares[1][2]}
        bottomColor={props.squares[0][2]}
      />
      {/* middle column */}
      <TopColumn
        topLeftX={props.centerX + props.width}
        topLeftY={props.centerY - 3 * props.width}
        width={props.width}
        topColor={props.squares[2][1]}
        middleColor={props.squares[1][1]}
        bottomColor={props.squares[0][1]}
      />
      {/* right-most column */}
      <TopColumn
        topLeftX={props.centerX + 2 * props.width}
        topLeftY={props.centerY - 2 * props.width}
        width={props.width}
        topColor={props.squares[2][0]}
        middleColor={props.squares[1][0]}
        bottomColor={props.squares[0][0]}
      />
      */}
    </g>
  );
}

function FrontSquare(props) {
  return (
    <polygon
      points={`${props.x},${props.y} ${props.x - props.width},${props.y -
        props.width} ${props.x - props.width},${props.y} ${props.x},${props.y +
        props.width}`}
      fill={props.color}
      stroke="black"
    />
  );
}

function FrontColumn(props) {
  return (
    <g>
      <FrontSquare
        x={props.topLeftX}
        y={props.topLeftY}
        width={props.width}
        color={colorMappings[props.topColor]}
      />
      <FrontSquare
        x={props.topLeftX}
        y={props.topLeftY + props.width}
        width={props.width}
        color={colorMappings[props.middleColor]}
      />
      <FrontSquare
        x={props.topLeftX}
        y={props.topLeftY + 2 * props.width}
        width={props.width}
        color={colorMappings[props.bottomColor]}
      />
    </g>
  );
}

function FrontSide(props) {
  return (
    <g>
      {/* nearest column */}
      <FrontColumn
        topLeftX={props.centerX}
        topLeftY={props.centerY}
        width={props.width}
        topColor={props.squares[0][2]}
        middleColor={props.squares[1][2]}
        bottomColor={props.squares[2][2]}
      />
      {/* middle column */}
      <FrontColumn
        topLeftX={props.centerX - props.width}
        topLeftY={props.centerY - props.width}
        width={props.width}
        topColor={props.squares[0][1]}
        middleColor={props.squares[1][1]}
        bottomColor={props.squares[2][1]}
      />
      {/* furthest column */}
      <FrontColumn
        topLeftX={props.centerX - 2 * props.width}
        topLeftY={props.centerY - 2 * props.width}
        width={props.width}
        topColor={props.squares[0][0]}
        middleColor={props.squares[1][0]}
        bottomColor={props.squares[2][0]}
      />
    </g>
  );
}

function RightSquare(props) {
  return (
    <polygon
      points={`${props.x},${props.y} ${props.x + props.width},${props.y -
        props.width} ${props.x + props.width},${props.y} ${props.x},${props.y +
        props.width}`}
      fill={props.color}
      stroke="black"
    />
  );
}

function RightColumn(props) {
  return (
    <g>
      <RightSquare
        x={props.topLeftX}
        y={props.topLeftY}
        width={props.width}
        color={colorMappings[props.topColor]}
      />
      <RightSquare
        x={props.topLeftX}
        y={props.topLeftY + props.width}
        width={props.width}
        color={colorMappings[props.middleColor]}
      />
      <RightSquare
        x={props.topLeftX}
        y={props.topLeftY + 2 * props.width}
        width={props.width}
        color={colorMappings[props.bottomColor]}
      />
    </g>
  );
}

function RightSide(props) {
  return (
    <g>
      {/* nearest column */}
      <RightColumn
        topLeftX={props.centerX}
        topLeftY={props.centerY}
        width={props.width}
        topColor={props.squares[0][0]}
        middleColor={props.squares[1][0]}
        bottomColor={props.squares[2][0]}
      />
      {/* middle column */}
      <RightColumn
        topLeftX={props.centerX + props.width}
        topLeftY={props.centerY - props.width}
        width={props.width}
        topColor={props.squares[0][1]}
        middleColor={props.squares[1][1]}
        bottomColor={props.squares[2][1]}
      />
      {/* furthest column */}
      <RightColumn
        topLeftX={props.centerX + 2 * props.width}
        topLeftY={props.centerY - 2 * props.width}
        width={props.width}
        topColor={props.squares[0][2]}
        middleColor={props.squares[1][2]}
        bottomColor={props.squares[2][2]}
      />
    </g>
  );
}

function Square(props) {
  return (
    <button
      className="square"
      style={{ backgroundColor: colorMappings[props.color] }}
    ></button>
  );
}

function Side(props) {
  return (
    <div>
      <div className="board-row">
        <Square color={props.squares[0][0]} />
        <Square color={props.squares[0][1]} />
        <Square color={props.squares[0][2]} />
      </div>
      <div className="board-row">
        <Square color={props.squares[1][0]} />
        <Square color={props.squares[1][1]} />
        <Square color={props.squares[1][2]} />
      </div>
      <div className="board-row">
        <Square color={props.squares[2][0]} />
        <Square color={props.squares[2][1]} />
        <Square color={props.squares[2][2]} />
      </div>
    </div>
  );
}

class Cube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sides: {
        front: {
          color: COLOR_WHITE,
          squares: getMonoColorSide(COLOR_WHITE)
        },
        back: {
          color: COLOR_WHITE,
          squares: getMonoColorSide(COLOR_YELLOW)
        },
        top: {
          color: COLOR_RED,
          squares: getMonoColorSide(COLOR_RED)
        },
        bottom: {
          color: COLOR_ORANGE,
          squares: getMonoColorSide(COLOR_ORANGE)
        },
        left: {
          color: COLOR_BLUE,
          squares: getMonoColorSide(COLOR_BLUE)
        },
        right: {
          color: COLOR_GREEN,
          squares: getMonoColorSide(COLOR_GREEN)
        }
      }
    };
  }

  turnCube(direction) {
    const newSides = {};
    switch (direction) {
      case DIRECTION_UP:
        newSides.top = this.state.sides.front;
        newSides.front = this.state.sides.bottom;
        newSides.bottom = this.state.sides.back;
        newSides.back = this.state.sides.top;
        // unchanged
        newSides.left = this.state.sides.left;
        newSides.right = this.state.sides.right;
        break;
      case DIRECTION_DOWN:
        newSides.top = this.state.sides.back;
        newSides.front = this.state.sides.top;
        newSides.bottom = this.state.sides.front;
        newSides.back = this.state.sides.bottom;
        // unchanged
        newSides.left = this.state.sides.left;
        newSides.right = this.state.sides.right;
        break;
      case DIRECTION_LEFT:
        newSides.left = this.state.sides.front;
        newSides.front = this.state.sides.right;
        newSides.right = this.state.sides.back;
        newSides.back = this.state.sides.left;
        // unchanged
        newSides.top = this.state.sides.top;
        newSides.bottom = this.state.sides.bottom;
        break;
      case DIRECTION_RIGHT:
        newSides.left = this.state.sides.back;
        newSides.front = this.state.sides.left;
        newSides.right = this.state.sides.front;
        newSides.back = this.state.sides.right;
        // unchanged
        newSides.top = this.state.sides.top;
        newSides.bottom = this.state.sides.bottom;
        break;
      default:
        // do nothing
        console.log("Error: unrecognized direction");
    }
    this.setState({
      sides: newSides
    });
  }

  getNewSidesForMove() {
    return {
      back: {
        color: this.state.sides.back.color,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      },
      front: {
        color: this.state.sides.front.color,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      },
      left: {
        color: this.state.sides.left.color,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      },
      right: {
        color: this.state.sides.right.color,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      },
      bottom: {
        color: this.state.sides.left.bottom,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      },
      top: {
        color: this.state.sides.left.top,
        squares: [
          new Array(3).fill(null),
          new Array(3).fill(null),
          new Array(3).fill(null)
        ]
      }
    };
  }

  moveRight() {
    const newSides = this.getNewSidesForMove();
    // left is unchanged
    newSides.left = this.state.sides.left;

    // front side
    newSides.front.squares[0][0] = this.state.sides.front.squares[0][0];
    newSides.front.squares[0][1] = this.state.sides.front.squares[0][1];
    newSides.front.squares[0][2] = this.state.sides.bottom.squares[0][2];
    newSides.front.squares[1][0] = this.state.sides.front.squares[1][0];
    newSides.front.squares[1][1] = this.state.sides.front.squares[1][1];
    newSides.front.squares[1][2] = this.state.sides.bottom.squares[1][2];
    newSides.front.squares[2][0] = this.state.sides.front.squares[2][0];
    newSides.front.squares[2][1] = this.state.sides.front.squares[2][1];
    newSides.front.squares[2][2] = this.state.sides.bottom.squares[2][2];
    this.setState({
      sides: newSides
    });
  }

  moveFront() {
    const newSides = this.getNewSidesForMove();
    // back is unchanged
    newSides.back = this.state.sides.back;

    // front side
    newSides.front.squares[0][0] = this.state.sides.front.squares[2][0];
    newSides.front.squares[0][1] = this.state.sides.front.squares[1][0];
    newSides.front.squares[0][2] = this.state.sides.front.squares[0][0];
    newSides.front.squares[1][0] = this.state.sides.front.squares[2][1];
    newSides.front.squares[1][1] = this.state.sides.front.squares[1][1];
    newSides.front.squares[1][2] = this.state.sides.front.squares[0][1];
    newSides.front.squares[2][0] = this.state.sides.front.squares[0][2];
    newSides.front.squares[2][1] = this.state.sides.front.squares[1][2];
    newSides.front.squares[2][2] = this.state.sides.front.squares[0][2];

    // left side
    newSides.left.squares[0][0] = this.state.sides.left.squares[0][0];
    newSides.left.squares[0][1] = this.state.sides.left.squares[0][1];
    newSides.left.squares[0][2] = this.state.sides.bottom.squares[0][0];
    newSides.left.squares[1][0] = this.state.sides.left.squares[1][0];
    newSides.left.squares[1][1] = this.state.sides.left.squares[1][1];
    newSides.left.squares[1][2] = this.state.sides.bottom.squares[0][1];
    newSides.left.squares[2][0] = this.state.sides.left.squares[2][0];
    newSides.left.squares[2][1] = this.state.sides.left.squares[2][1];
    newSides.left.squares[2][2] = this.state.sides.bottom.squares[0][2];

    // right side
    newSides.right.squares[0][0] = this.state.sides.top.squares[2][0];
    newSides.right.squares[0][1] = this.state.sides.right.squares[0][1];
    newSides.right.squares[0][2] = this.state.sides.right.squares[0][2];
    newSides.right.squares[1][0] = this.state.sides.top.squares[2][1];
    newSides.right.squares[1][1] = this.state.sides.right.squares[1][1];
    newSides.right.squares[1][2] = this.state.sides.right.squares[1][2];
    newSides.right.squares[2][0] = this.state.sides.top.squares[2][2];
    newSides.right.squares[2][1] = this.state.sides.right.squares[2][1];
    newSides.right.squares[2][2] = this.state.sides.right.squares[2][2];

    // top side
    newSides.top.squares[0][0] = this.state.sides.top.squares[0][0];
    newSides.top.squares[0][1] = this.state.sides.top.squares[0][1];
    newSides.top.squares[0][2] = this.state.sides.top.squares[0][2];
    newSides.top.squares[1][0] = this.state.sides.top.squares[1][0];
    newSides.top.squares[1][1] = this.state.sides.top.squares[1][1];
    newSides.top.squares[1][2] = this.state.sides.top.squares[1][2];
    newSides.top.squares[2][0] = this.state.sides.left.squares[2][2];
    newSides.top.squares[2][1] = this.state.sides.left.squares[1][2];
    newSides.top.squares[2][2] = this.state.sides.left.squares[0][2];

    // bottom side
    newSides.bottom.squares[0][0] = this.state.sides.right.squares[2][0];
    newSides.bottom.squares[0][1] = this.state.sides.right.squares[1][0];
    newSides.bottom.squares[0][2] = this.state.sides.right.squares[0][0];
    newSides.bottom.squares[1][0] = this.state.sides.bottom.squares[1][0];
    newSides.bottom.squares[1][1] = this.state.sides.bottom.squares[1][1];
    newSides.bottom.squares[1][2] = this.state.sides.bottom.squares[1][2];
    newSides.bottom.squares[2][0] = this.state.sides.bottom.squares[2][0];
    newSides.bottom.squares[2][1] = this.state.sides.bottom.squares[2][1];
    newSides.bottom.squares[2][2] = this.state.sides.bottom.squares[2][2];

    this.setState({
      sides: newSides
    });
  }

  moveFrontInverted() {
    const newSides = this.getNewSidesForMove();
    // back is unchanged
    newSides.back = this.state.sides.back;

    // front side
    newSides.front.squares[0][0] = this.state.sides.front.squares[0][2];
    newSides.front.squares[0][1] = this.state.sides.front.squares[1][2];
    newSides.front.squares[0][2] = this.state.sides.front.squares[2][2];
    newSides.front.squares[1][0] = this.state.sides.front.squares[0][1];
    newSides.front.squares[1][1] = this.state.sides.front.squares[1][1];
    newSides.front.squares[1][2] = this.state.sides.front.squares[2][1];
    newSides.front.squares[2][0] = this.state.sides.front.squares[0][0];
    newSides.front.squares[2][1] = this.state.sides.front.squares[0][1];
    newSides.front.squares[2][2] = this.state.sides.front.squares[2][0];

    // left side
    newSides.left.squares[0][0] = this.state.sides.left.squares[0][0];
    newSides.left.squares[0][1] = this.state.sides.left.squares[0][1];
    newSides.left.squares[0][2] = this.state.sides.top.squares[2][2];
    newSides.left.squares[1][0] = this.state.sides.left.squares[1][0];
    newSides.left.squares[1][1] = this.state.sides.left.squares[1][1];
    newSides.left.squares[1][2] = this.state.sides.top.squares[2][1];
    newSides.left.squares[2][0] = this.state.sides.left.squares[2][0];
    newSides.left.squares[2][1] = this.state.sides.left.squares[2][1];
    newSides.left.squares[2][2] = this.state.sides.top.squares[2][0];

    // right side
    newSides.right.squares[0][0] = this.state.sides.bottom.squares[0][2];
    newSides.right.squares[0][1] = this.state.sides.right.squares[0][1];
    newSides.right.squares[0][2] = this.state.sides.right.squares[0][2];
    newSides.right.squares[1][0] = this.state.sides.bottom.squares[0][1];
    newSides.right.squares[1][1] = this.state.sides.right.squares[1][1];
    newSides.right.squares[1][2] = this.state.sides.right.squares[1][2];
    newSides.right.squares[2][0] = this.state.sides.bottom.squares[0][0];
    newSides.right.squares[2][1] = this.state.sides.right.squares[2][1];
    newSides.right.squares[2][2] = this.state.sides.right.squares[2][2];

    // top side
    newSides.top.squares[0][0] = this.state.sides.top.squares[0][0];
    newSides.top.squares[0][1] = this.state.sides.top.squares[0][1];
    newSides.top.squares[0][2] = this.state.sides.top.squares[0][2];
    newSides.top.squares[1][0] = this.state.sides.top.squares[1][0];
    newSides.top.squares[1][1] = this.state.sides.top.squares[1][1];
    newSides.top.squares[1][2] = this.state.sides.top.squares[1][2];
    newSides.top.squares[2][0] = this.state.sides.right.squares[0][0];
    newSides.top.squares[2][1] = this.state.sides.right.squares[1][0];
    newSides.top.squares[2][2] = this.state.sides.right.squares[2][0];

    // bottom side
    newSides.bottom.squares[0][0] = this.state.sides.left.squares[0][2];
    newSides.bottom.squares[0][1] = this.state.sides.left.squares[1][2];
    newSides.bottom.squares[0][2] = this.state.sides.left.squares[2][2];
    newSides.bottom.squares[1][0] = this.state.sides.bottom.squares[1][0];
    newSides.bottom.squares[1][1] = this.state.sides.bottom.squares[1][1];
    newSides.bottom.squares[1][2] = this.state.sides.bottom.squares[1][2];
    newSides.bottom.squares[2][0] = this.state.sides.bottom.squares[2][0];
    newSides.bottom.squares[2][1] = this.state.sides.bottom.squares[2][1];
    newSides.bottom.squares[2][2] = this.state.sides.bottom.squares[2][2];

    this.setState({
      sides: newSides
    });
  }

  renderSide(i) {
    return <Side squares={this.state.sides[i].squares} />;
  }

  render() {
    const width = 10;
    const centerX = 50;
    const centerY = 60;
    return (
      <div>
        <div>
          <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
            <RightSide
              centerX={centerX}
              centerY={centerY}
              width={width}
              squares={this.state.sides.right.squares}
            />
            <FrontSide
              centerX={centerX}
              centerY={centerY}
              width={width}
              squares={this.state.sides.front.squares}
            />
            <TopSide
              centerX={centerX}
              centerY={centerY}
              width={width}
              squares={this.state.sides.top.squares}
            />
          </svg>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <div className="board-side">{this.renderSide("top")}</div>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <div className="board-side">{this.renderSide("left")}</div>
                </td>
                <td>
                  <div className="board-side">{this.renderSide("front")}</div>
                </td>
                <td>
                  <div className="board-side">{this.renderSide("right")}</div>
                </td>
                <td>
                  <div className="board-side">{this.renderSide("back")}</div>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <div className="board-side">{this.renderSide("bottom")}</div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <button onClick={() => this.turnCube(DIRECTION_UP)}>
                    &#x2191;
                  </button>
                </td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <button onClick={() => this.turnCube(DIRECTION_LEFT)}>
                    &#x2190;
                  </button>
                </td>
                <td></td>
                <td>
                  <button onClick={() => this.turnCube(DIRECTION_RIGHT)}>
                    &#x2192;
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button onClick={() => this.turnCube(DIRECTION_DOWN)}>
                    &#x2193;
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <button onClick={() => this.moveFront()}>{"F"}</button>
                </td>
                <td>
                  <button onClick={() => this.moveFrontInverted()}>
                    {"FI"}
                  </button>
                </td>
                <td>
                  <button onClick={() => this.moveRight()}>{"R"}</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function getMonoColorSide(color) {
  return [Array(3).fill(color), Array(3).fill(color), Array(3).fill(color)];
}
// ========================================

ReactDOM.render(<Cube />, document.getElementById("root"));
